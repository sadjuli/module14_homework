const json = {
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
]
}

function JSONToJsObj(json) {
    const jsObj = JSON.parse(JSON.stringify(json))
    return jsObj
}

