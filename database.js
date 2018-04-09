const HomeInventoryDatabase = {}
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []



  const a = {
    name: "ok1",
    location: "ok2",
    description: "ok3"
  }

  const b = {
    name: "ok4",
    location: "ok5",
    description: "ok6"
  }

  const c = {
    name: "ok7",
    location: "ok8",
    description: "ok9"
  }
  const d = {
    name: "ok10",
    location: "ok11",
    description: "ok12"
  }
  const e = {
    name: "ok13",
    location: "ok14",
    description: "ok15"
  }
  const f = {
    name: "ok16",
    location: "ok17",
    description: "ok18"
  }
  const g = {
    name: "ok19",
    location: "ok20",
    description: "ok21"
  }
  const h = {
    name: "ok22",
    location: "ok23",
    description: "ok24"
  }
  const i = {
    name: "ok25",
    location: "ok26",
    description: "ok27"
  }
  const j = {
    name: "ok28",
    location: "ok29",
    description: "ok30"
  }

  HomeInventoryDatabase.furniture.push(a, b, c)
  HomeInventoryDatabase.furniture.push(d, e, f)
  HomeInventoryDatabase.furniture.push(g, h, i, j)

  const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")