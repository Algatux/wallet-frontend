let schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    }
                },
                "required": ["id", "type", "lastname", "email"]
            }
        },
        "requestToken": {
            "type": "object",
            "properties": {
                "token": {
                    "type": "string",
                    "faker": "random.uuid"
                },
                "refresh": {
                    "type": "string",
                    "faker": "random.uuid"
                },
                "user": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number",
                            "unique": true,
                            "minimum": 1
                        },
                        "name": {
                            "type": "string",
                            "faker": "name.firstName"
                        }
                    },
                    "required": ["id", "name"]
                }
            },
            "required": ["token", "refresh", "user"]
        }
    },
    "required": ["login","users"]
};


module.exports = schema;
