# Introduction

This porject was created using the data information from : 

*https://futurama-project.herokuapp.com/*

The Futurama database contains a lib folder, where you can find the data, connections, schemas and routes. Each section contains a variety levels of code that will allow the user to understand how to conect to the localhost:3000 and access to it. 


# Objectives: 

1. Create a database about countries.
2. Have an accesible Api source for future projects.
3. Understand MongoDB-express and Node.
4. Create an API for the front end-group project.

# CRUD Functionality

|      URL                |  Path        |  Method       |   Action |   Description                 |
|-------------------------|--------------|---------------|----------|-------------------------------|
|       "/"               |   /          |   GET         |  #index  |  List all items of character  |
|-------------------------|--------------|---------------|----------|-------------------------------|
| "/planet/:planet"       |   /planet    |   GET         |  #index  | Show resources by planet name |
|-------------------------|--------------|---------------|----------|-------------------------------|
| "/name/:name"           |   /name      |   GET         |  #index  | Show character by name        |
|-------------------------|--------------|---------------|----------|-------------------------------|
|       "/"               |   /          |   POST        |  #Create | Create a new character        |
|-------------------------|--------------|---------------|----------|-------------------------------|
| "/planet/:name"         |   /name      |   PATCH / PUT |  #Update | Update Planet name            |
|-------------------------|--------------|---------------|----------|-------------------------------|
| "/delete/:id"           |   /id        |   DELETE      | #destroy | Delete by id                  |
|-------------------------|--------------|---------------|----------|-------------------------------|
|       "/"               |   /          |   GET         |  #index  | List all quotes               |
|-------------------------|--------------|---------------|----------|-------------------------------|
| "/character/:character" |   /character |   GET         |  #index  | List quotes by character      |
|-------------------------|--------------|---------------|----------|-------------------------------|
| "/quote/:quote"         |   /quote     |   GET         |  #index  | List quotes by quotes         |
|-------------------------|--------------|---------------|----------|-------------------------------|
|        "/"              |   /          |   POST        |  #Create | Create a new quote            |

| "/quote/:quote"         |   /quote     |   PATCH / PUT |  #Update | Update quote                  |

| "/:quote"               |   /quote     |   Delete      | #Destroy | Delete quote                  |


# Documentation

The base data was obtained from https://futuramaapi.herokuapp.com/, there the Api endpoint was All and we abstracted the info by Command+s and added as a Json documment to the project. 


# License

Private License

