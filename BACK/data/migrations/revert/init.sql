-- Revert omur:init from pg

BEGIN;

DROP TABLE IF EXISTS wall, "user", "column", element, participate;
DROP DOMAIN IF EXISTS pint, mail;

COMMIT;