INSERT INTO "user".user_detail(
	  user_first_name, user_last_name,  doc)
	VALUES ('Sandesh', 'Patil', '{
            "first_name":"Sandesh",
            "last_name":"Patil"
            }');
    
    select * from "user".user_detail
 delete from "user".user_detail   
    SELECT '5'::json;
 
 
 alter table "user".user_detail
 add doc JSONB not null;
 
 