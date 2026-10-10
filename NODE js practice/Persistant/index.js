const storage = require("node-persist");

async function main(){
    await storage.init()

    await storage.setItem("Name","Rohan")
    await storage.setItem("rollnumber",50)

    const name = await storage.getItem("Name")
    console.log(await storage.getItem("rollnumber"))

    // update a key value
    await storage.updateItem("rollnumber",6)
    console.log(await storage.getItem("rollnumber"))

    //remove a key value
    await storage.removeItem('rollnumber')
    console.log(await storage.getItem("rollnumber"))


    //clear storage
    console.log(name);
    await storage.clear()

    await storage.setItem("batman", {name: "Bruce Wayne"});
    await storage.setItem("superman", {name: "Clark Kent"});
    await storage.setItem("hulk", {name: "Bruce Banner"});
    console.log(await storage.valuesWithKeyMatch('man')); 
    // also accepts a Regular Expression
    console.log(await storage.valuesWithKeyMatch(/man/));
}

main()