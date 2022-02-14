# IronShop

#User

|  HTTP Method  |    URI path  		 			      |    Description        |  Protected |
| ------------- | ----------------------------|-----------------------|------------|
|     GET			  | /  				 			            | index page            |            |
|     GET			  | /productos				 			    | Products page         |            |
|     GET			  | /registro  		 		        	| Register page 	      |	           |
|     GET			  | /iniciar-sesion 	 			    | Login page  		      |            | 
|     GET			  | /perfil/ 	     			        | Profile page	        |     ✅     |
|     GET			  | /perfil/:id/edit   			    | Edit profile page     | 	  ✅     |
|     POST		  | /perfil/:id/edit   			    | redirect to profile  	|     ✅     |
|     GET			  | /perfil/cart  				      | Profile cart	       	|     ✅     |
|     POST		  | /perfil/pagar  				      | Redirect to success	  |     ✅     |


#Admin

|  HTTP Method  |    URI path  		 			            |    Description       |  Protected  |
| ------------- | ----------------------------------|--------------------- |-------------|
|       GET			| /admin  	    				            | Admin profile	   	   |  ✅         |
|       POST		| /admin/comentarios/:id/eliminar		| Delete comment	     |  ✅         |
|       GET			| /admin/productos/crear		        | Create products	     |  ✅         |
|       POST		| /admin/productos/crear		        | Create products      |  ✅         |
|       POST		| /admin/productos/:id/eliminar     | redirect to products |  ✅         |

