"use client"

import { useCallback, useEffect, useState } from "react"
import { Message } from "@/model/User"
import { useToast } from "@/hooks/use-toast"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AcceptMessageSchema } from "@/Schemas/acceptMessageSchema"
import axios, { AxiosError } from "axios"
import { ApiResponse } from "@/Types/ApiResponse"
import MessageCard from "../../components/MessageCard"
import { Switch } from "../../components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2, RefreshCcw } from "lucide-react"

const DashboardPage = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSwitchLoading, setIsSwitchLoading] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)
    const [suggestedMessages, setSuggestedMessages] = useState<string[]>([])

    const { toast } = useToast()
    const { data: session } = useSession()

    const form = useForm({
        resolver: zodResolver(AcceptMessageSchema),
        defaultValues: {
            acceptMessages: true
        }
    })

    const { register, watch, setValue } = form;
    const acceptMessages = watch('acceptMessages');

    // Fetch message acceptance status
    const fetchAcceptMessage = useCallback(async () => {
        setIsSwitchLoading(true)
        try {
            const response = await axios.get<ApiResponse>('/api/accept-messages')
            setValue('acceptMessages', response.data.isAcceptingMessage ?? true)
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>
            toast({
                title: "Error",
                description: axiosError.response?.data.message || "Failed to fetch message settings",
                variant: "destructive"
            })
        } finally {
            setIsSwitchLoading(false)
        }
    }, [setValue, toast])

    // Fetch user messages
    const fetchMessages = useCallback(async (refresh: boolean = false) => {
        setIsLoading(true)
        try {
            const response = await axios.get<ApiResponse>('/api/get-messages')
            // Assumes your API returns messages array in data
            setMessages((response.data as any).messages || [])
            if (refresh) {
                toast({
                    title: "Refreshed Messages",
                    description: "Showing latest messages",
                })
            }
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>
            toast({
                title: "Error",
                description: axiosError.response?.data.message || "Failed to fetch messages",
                variant: "destructive"
            })
        } finally {
            setIsLoading(false)
        }
    }, [toast])

    useEffect(() => {
        if (!session || !session.user) return;
        fetchMessages()
        fetchAcceptMessage()
    }, [session, fetchAcceptMessage, fetchMessages])

    // Handle Switch toggle change
    const handleSwitchChange = async () => {
        try {
            const response = await axios.post<ApiResponse>('/api/accept-messages', {
                acceptMessages: !acceptMessages
            })
            setValue('acceptMessages', !acceptMessages)
            toast({
                title: response.data.message,
                description: "Settings updated successfully",
            })
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>
            toast({
                title: "Error",
                description: axiosError.response?.data.message || "Failed to update settings",
                variant: "destructive"
            })
        }
    }

    // Delete message handler
    const handleDeleteMessage = (messageId: string) => {
        setMessages(messages.filter((message) => message._id.toString() !== messageId))
    }

    // AI Suggestion Handler using your new stream route
    const handleFetchAiQuestions = async () => {
        setIsGenerating(true)
        try {
            const response = await axios.post('/api/suggest-messages')
            // If your stream returns text separated by '||'
            const textData = typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
            const questions = textData.split('||').filter(Boolean)
            setSuggestedMessages(questions.length > 0 ? questions : [
                "What's a hobby you've recently started?",
                "If you could have dinner with any historical figure, who would it be?",
                "What's a simple thing that makes you happy?"
            ])
        } catch (error) {
            toast({
                title: "AI Error",
                description: "Failed to generate suggestions",
                variant: "destructive"
            })
        } finally {
            setIsGenerating(false)
        }
    }

    if (!session || !session.user) {
        return <div className="flex justify-center items-center h-screen">Please login to view dashboard.</div>
    }

    const { username } = session.user as { username?: string };
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const profileUrl = `${baseUrl}/u/${username}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(profileUrl);
        toast({ title: "Copied!", description: "Profile link copied to clipboard." });
    }

    return (
        <div className="my-8 mx-4 md:mx-auto p-6 bg-white rounded-lg w-full max-w-6xl shadow-md">
            <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

            {/* Unique Link Section */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>
                <div className="flex items-center space-x-2">
                    <input type="text" value={profileUrl} disabled className="input input-bordered w-full p-2 bg-gray-100 border rounded" />
                    <Button onClick={copyToClipboard}>Copy</Button>
                </div>
            </div>

            {/* Accept Messages Switch */}
            <div className="mb-4 flex items-center">
                <Switch
                    {...register('acceptMessages')}
                    checked={acceptMessages}
                    onCheckedChange={handleSwitchChange}
                    disabled={isSwitchLoading}
                />
                <span className="ml-2">
                    Accept Messages: {acceptMessages ? 'On' : 'Off'}
                </span>
            </div>

            <Separator />

            {/* Refresh Button */}
            <Button
                className="mt-4"
                variant="outline"
                onClick={(e) => {
                    e.preventDefault();
                    fetchMessages(true);
                }}
            >
                {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <RefreshCcw className="h-4 w-4" />
                )}
            </Button>

            {/* Messages Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {messages.length > 0 ? (
                    messages.map((message) => (
                        <MessageCard
                            key={message._id.toString()}
                            message={message}
                            onMessageDelete={handleDeleteMessage}
                        />
                    ))
                ) : (
                    <p>No messages to display.</p>
                )}
            </div>

            {/* AI Suggest Questions Section */}
            <div className="mt-10">
                <Button onClick={handleFetchAiQuestions} disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Suggest Messages
                </Button>
                <div className="mt-4 space-y-2">
                    {suggestedMessages.map((q, idx) => (
                        <div key={idx} className="p-3 bg-gray-50 border rounded-md cursor-pointer hover:bg-gray-100">
                            {q}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;