import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-[#f3f5f3] px-6 py-16 text-[#353d36] font-sans antialiased selection:bg-[#cbd5cb]">
      {/* 매거진 감성 섹션 */}
      <section className="mx-auto max-w-3xl rounded-[2.5rem] bg-[#fcfcfa] p-10 md:p-14 border border-[#e3e6e3] shadow-sm relative overflow-hidden">
        
        {/* 상단 미니 매거진 헤더 데코 */}
        <div className="flex justify-between items-center border-b border-[#e9ebe9] pb-6 mb-10 text-xs tracking-[0.2em] font-semibold text-[#8b948c] uppercase">
          <span>Personal Journal</span>
          <span>Issue No. 01</span>
        </div>

        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:items-center">
          {/* 비대칭 곡선 및 미색 액자 선이 적용된 프로필 사진 */}
          <div className="p-3 bg-[#faf9f6] border border-[#e9e8e3] rounded-[2.5rem_1.5rem_3.5rem_2rem] shadow-sm">
            <img
              src={profile.image_path}
              alt={`${profile.name} 프로필 사진`}
              className="h-72 w-full rounded-[2.2rem_1.2rem_3.2rem_1.7rem] object-cover filter contrast-[1.02]"
            />
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-[#e4ebe4] text-[#435745] text-xs font-bold tracking-widest uppercase rounded-full">
              내 프로필
            </div>
            <h1 className="mt-6 font-serif text-5xl font-light text-[#222923] tracking-tight leading-tight">
              {profile.name}
            </h1>
            <p className="mt-6 font-serif italic text-lg leading-relaxed text-[#555d56] border-l-2 border-[#c2ccc2] pl-4">
              "{profile.tagline}"
            </p>
          </div>
        </div>

        {/* 기본 정보: 핀터레스트/매거진 감성의 보더리스 라인 형태 */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 border-t border-b border-[#e9ebe9] py-8">
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-wider text-[#8b948c] uppercase">이름</span>
            <span className="mt-2 font-serif text-xl font-normal text-[#222923]">{profile.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-wider text-[#8b948c] uppercase">소속</span>
            <span className="mt-2 font-serif text-xl font-normal text-[#222923]">{profile.team}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-wider text-[#8b948c] uppercase">분야 / 포지션</span>
            <span className="mt-2 font-serif text-xl font-normal text-[#222923]">{profile.position}</span>
          </div>
        </div>

        {/* 자기소개 본문 */}
        <div className="mt-14">
          <h2 className="font-serif text-2xl font-light text-[#222923] tracking-tight border-b border-[#e9ebe9] pb-3">Story</h2>
          <p className="mt-6 text-[0.98rem] leading-9 text-[#4e574f] font-light whitespace-pre-line">
            {profile.introduction}
          </p>
        </div>

        {/* 특징 배지 목록 */}
        <div className="mt-14 border-t border-[#e9ebe9] pt-10">
          <h2 className="font-serif text-2xl font-light text-[#222923] tracking-tight">Highlights</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight.id}
                className="px-5 py-2.5 bg-[#eaf0ea] hover:bg-[#dee7de] text-[#344636] text-xs font-medium tracking-wider rounded-full border border-[#d6dfd6] shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-default"
              >
                # {highlight.label}
              </span>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
