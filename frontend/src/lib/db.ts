import Database from "better-sqlite3";
import path from "node:path";

export type Profile = {
  id: number;
  name: string;
  team: string;
  position: string;
  uniform_number: string;
  tagline: string;
  introduction: string;
  image_path: string;
};

export type Highlight = {
  id: number;
  label: string;
};

const dbPath = path.join(process.cwd(), "local.db");

const defaultProfile: Profile = {
  id: 1,
  name: "전서원",
  team: "동아대 경영정보학과",
  position: "데이터 분석",
  uniform_number: "-",
  tagline: "AI와 함께 나만의 웹사이트를 만드는 중입니다",
  introduction:
    "안녕하세요. 저는 전서원입니다. 현재 동아대 경영정보학과 4학년에 재학 중입니다. 잘 부탁드립니다!",
  image_path: "/images/seowon.jpg",
};

const defaultHighlights: Highlight[] = [
  { id: 1, label: "데이터분석" },
  { id: 2, label: "경영정보시스템" },
  { id: 3, label: "AI활용" },
];

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      position TEXT NOT NULL,
      uniform_number TEXT NOT NULL,
      tagline TEXT NOT NULL,
      introduction TEXT NOT NULL,
      image_path TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS highlights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL
    );
  `);

  return db;
}

export function getProfile() {
  try {
    const profile = getDb()
      .prepare(
        "SELECT id, name, team, position, uniform_number, tagline, introduction, image_path FROM profile ORDER BY id LIMIT 1",
      )
      .get() as Profile | undefined;

    return profile ?? defaultProfile;
  } catch (error) {
    console.error(error);
    return defaultProfile;
  }
}

export function getHighlights() {
  try {
    const highlights = getDb().prepare("SELECT id, label FROM highlights ORDER BY id").all() as Highlight[];

    return highlights.length > 0 ? highlights : defaultHighlights;
  } catch (error) {
    console.error(error);
    return defaultHighlights;
  }
}
