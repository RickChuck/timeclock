CREATE TABLE punches(
    punch_id SERIAL PRIMARY KEY,
    punch_type VARCHAR(3),
    date_id TEXT,
    day_of_week TEXT,
    hour_num INTEGER NOT NULL CHECK (hour_num BETWEEN 0 AND 13),
    minute_num INTEGER NOT NULL CHECK (minute_num BETWEEN 0 AND 60),
    am_pm TEXT
);