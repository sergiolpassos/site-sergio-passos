import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="gutter mx-auto flex max-w-6xl flex-col gap-3 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
        <p>
          {profile.name}, {profile.location}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a className="hover:text-foreground" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="hover:text-foreground" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
