DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '전서원',
  '동아대 경영정보학과',
  '데이터 분석',
  '-',
  'AI와 함께 나만의 웹사이트를 만드는 중입니다',
  '안녕하세요. 저는 전서원입니다. 현재 동아대 경영정보학과 4학년에 재학 중입니다. 잘 부탁드립니다!',
  '/images/seowon.jpg'
);

INSERT INTO highlights (label) VALUES
  ('데이터분석'),
  ('경영정보시스템'),
  ('AI활용');
