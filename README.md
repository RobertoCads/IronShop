# IronShop

#User

|  HTTP Method  |    URI path  		 			|    Description        |  Protected |
| ------------- | ------------- 	 			|---------------------  |------------|
| GET			| /  				 			| index page            |            |
| GET			| /registro  		 			| Register page 	    |	         |
| GET			| /iniciar-sesion 	 			| Login page  		    |            | 
| GET			| /perfil/  	     			| Profile page	        |    [x]    |
| GET			| /perfil/:id/edit   			| Edit profile page     | 	 [x]    |
| POST			| /perfil/:id/edit   			| redirect to profile  	|    [x]    |
| GET			| /perfil/cart  				| Profile cart	       	|    [x]    |
| POST			| /perfil/pagar  				| Redirect to success	|    [x]    |


#Admin

|  HTTP Method  |    URI path  		 			|    Description       |  Protected  |
| ------------- | ------------- 	 			|--------------------- |-------------|
| GET			| /admin  	    				| Admin profile	   	   |     [x]	 |
| POST			| /admin/:id/eliminar			| Delete comment	   |     [x]     |
| GET			| /admin/productos/crear		| Create products	   |     [x]     |
| POST			| /admin/productos/crear		| Create products      |     [x]     | 
| GET			| /admin/productos 				| List of products	   |     [x]     | 
| POST			| /admin/productos/:id/eliminar | redirect to products |     [x]     |
