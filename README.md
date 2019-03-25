# Partner Affiliate Layout Updater

> Manage Partner Layouts to import HTML. Create and combine Presets for HTML Manipulation.

## Installation
For complete environment setup run
```sh
docker-compose up -d
```

Now, you have these urls

* localhost:80/api (Backend)
* localhost:80 (Frontend)
* localhost:4200 (Frontend Angular Dev Server)
* localhost:8081 (MongoExpress)

## Development

#### Folder Structure
* /src => PHP Source Code
* /frontend => Angular 6 Frontend App (Node)
* /public => Web root folder

On frontend app build finish, the dist files are moved to the public folder.

#### Script Files
> inside ./dev, most of them are only wrapper to run inside container

|Name           |Description                                    |
|:--------------|:----------------------------------------------|
|build          |Build frontend app and migrate it to /public   |
|composer       |Run Composer                                   |
|console        |Run Symfony Console                            |
|demo           |Import Demo Data (Fixtures)                    |
|php            |Run PHP                                        |

## Docker Images
* Apache2 (HTTP Server)
* Frontend (Angular 6 Dev Server)
* Mongo (MongoDB)
* Mongo-Express (Mongo Express)
* Php (PHP-FPM)

## API Routes
|Name|Method|Url|
|:------------------------------|:-------:|:--------------------------|
|index                          |ANY      |/api/                      |                        
|preset_create                  |PUT      |/api/preset/new            |             
|app_preset_getsupportedtypes   |ANY      |/api/preset/types          |   
|preset_edit                    |POST     |/api/preset/{id}/edit      |    
|preset                         |GET      |/api/preset/               |    
|preset_show                    |GET      |/api/preset/{id}           |    
|app_preset_delete              |DELETE   |/api/preset/{id}/delete    |    
|theme                          |GET      |/api/theme/                |    
|theme_new                      |POST     |/api/theme/new             |    
|theme_edit                     |PUT      |/api/theme/{id}/edit       |    
|theme_show                     |GET      |/api/theme/{id}            |    
|app_theme_delete               |DELETE   |/api/theme/{id}/delete     |    
|theme_update                   |GET      |/api/theme/{id}/update     |    
|update_export                  |ANY      |/api/update/{update}/export|  
|update_approve                 |ANY      |/api/update/{id}/approve   |  
|update_decline                 |ANY      |/api/update/{id}/decline   |  
|app_update_index               |ANY      |/api/update/               |

