UPDATE punches
SET punch_type = $1,
date_id = $2,
day_of_week = $3,
hour_num = $4,
minute_num = $5,
am_pm = $6
WHERE punch_id = $7;