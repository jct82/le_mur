-- Verify omur:init on pg
BEGIN;
SELECT id, title, title_color, description, photo, pdf, owner_id 
FROM wall WHERE false;


SELECT id, name, lastname, email, password
FROM "user" WHERE false;

SELECT id, name, position, wall_id 
FROM "column" WHERE false;

SELECT id, name, description, type, position, link, url_src,column_id, owner_id
FROM element WHERE false;

SELECT id, wall_id,user_id
FROM participate WHERE false;

ROLLBACK;
