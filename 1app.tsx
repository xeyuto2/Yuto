import React, { useEffect, useMemo, useState } from "react"; import { motion } from "framer-motion"; import { Heart, Calendar, Mail, Music, MapPin, Gift, Star, Quote, Clock, Sparkles, } from "lucide-react"; import { Button } from "@/components/ui/button"; import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } from "@/components/ui/card"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea"; import { Badge } from "@/components/ui/badge"; import { Tabs, TabsList, TabsTrigger, TabsContent, } from "@/components/ui/tabs";

// Romantic stickers (animated emojis) const Stickers = () => (

  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {["💌", "💖", "🌸", "✨", "🌹", "🥰", "💕", "🌙"].map((emoji, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 50, 100, 150] }}
        transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
        className="absolute text-2xl select-none"
        style={{ left: `${10 + i * 12}%`, top: `${i % 3 * 20}%` }}
      >
        {emoji}
      </motion.div>
    ))}
  </div>
);export default function GirlfriendSite() { const yourName = "Hashim"; const partnerName = "Shifah"; const startDate = new Date("2023-11-14"); const nextImportantDate = new Date("2025-11-14");

const milestones = [ { date: "Nov 14, 2023", title: "The Start of Forever", note: "Even from afar, my heart found its home in you." }, { date: "Feb 14, 2024", title: "First Valentine Apart", note: "Distance kept us miles away, but love kept us close." }, { date: "Jun 2024", title: "Late Night Calls", note: "We laughed, we dreamed, and we fell asleep to each other's voices." }, { date: "2025...", title: "Someday Soon", note: "Counting days until I hold you tight." }, ];

const favorites = [ { label: "Song", value: "Thinking Out Loud – Ed Sheeran", icon: Music }, { label: "Place", value: "Everywhere you are", icon: MapPin }, { label: "Movie Night", value: "Shared screens, shared hearts", icon: Star }, { label: "Surprise", value: "Love letters & voice notes", icon: Gift }, ];

const [timeLeft, setTimeLeft] = useState(getTimeLeft(nextImportantDate)); useEffect(() => { const t = setInterval(() => setTimeLeft(getTimeLeft(nextImportantDate)), 1000); return () => clearInterval(t); }, [nextImportantDate]);

const daysTogether = useMemo(() => { const diff = Date.now() - startDate.getTime(); return Math.floor(diff / (1000 * 60 * 60 * 24)); }, [startDate]);

return ( <div className="relative min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50 text-slate-800"> <Stickers />

{/* NAVBAR */}
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b shadow-sm">
    <nav className="max-w-6xl mx-auto flex items-center justify-between p-3">
      <a href="#home" className="font-semibold tracking-tight text-rose-600 flex items-center gap-2">
        <Heart className="h-5 w-5" /> {partnerName}
      </a>
      <div className="hidden sm:flex gap-5 text-sm">
        <a href="#story" className="hover:text-rose-600">Our Story</a>
        <a href="#letter" className="hover:text-rose-600">Letter</a>
        <a href="#surprises" className="hover:text-rose-600">Surprises</a>
        <a href="#contact" className="hover:text-rose-600">Contact</a>
      </div>
    </nav>
  </header>

  {/* HERO */}
  <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl sm:text-6xl font-extrabold text-rose-700 drop-shadow"
    >
      To My Dearest {partnerName} 💕
    </motion.h1>
    <p className="mt-6 text-lg text-slate-700 max-w-2xl mx-auto">
      Even though distance keeps us apart, my love for you only grows stronger every day. This is our little digital love letter, a space made just for us.
    </p>
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <Badge variant="secondary" className="rounded-full"><Clock className="h-3 w-3 mr-1"/> {daysTogether} days in love</Badge>
      <Badge className="rounded-full"><Sparkles className="h-3 w-3 mr-1"/> Forever Yours</Badge>
    </div>
  </section>

  {/* COUNTDOWN */}
  <section id="countdown" className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
    <Card className="rounded-3xl bg-gradient-to-r from-pink-200 to-rose-200 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-800"><Calendar className="h-5 w-5"/> Counting Down</CardTitle>
        <CardDescription className="text-rose-700">
          Until our next special day together 💞
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((b) => (
            <div key={b.label} className="rounded-xl bg-white/70 p-4 shadow">
              <div className="text-2xl font-semibold text-rose-800 tabular-nums">{b.value}</div>
              <div className="text-xs text-rose-600">{b.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>

  {/* STORY */}
  <section id="story" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <Tabs defaultValue="timeline" className="w-full">
      <TabsList className="grid grid-cols-2 sm:w-auto">
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
        <TabsTrigger value="quote">Why I love you</TabsTrigger>
      </TabsList>
      <TabsContent value="timeline" className="mt-6">
        <div className="grid md:grid-cols-2 gap-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.date}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl bg-white/70 border p-4 shadow"
            >
              <div className="text-xs text-rose-600">{m.date}</div>
              <div className="font-semibold mt-1 text-rose-800">{m.title}</div>
              <div className="text-sm text-slate-600 mt-1">{m.note}</div>
            </motion.div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="quote" className="mt-6">
        <Card className="rounded-2xl bg-pink-50 border-rose-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-rose-600 shrink-0" />
              <p className="text-lg leading-relaxed text-rose-800">
                Distance may test us, but it cannot weaken us. Every heartbeat whispers your name, and every star I see reminds me of your smile.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </section>

  {/* SURPRISES */}
  <section id="surprises" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <h2 className="text-2xl font-bold text-rose-700 mb-4">Little Surprises for You 🎁</h2>
    <div className="grid sm:grid-cols-2 gap-4">
      {favorites.map((f) => (
        <Card key={f.label} className="rounded-2xl bg-white/80 border shadow">
          <CardContent className="flex items-start gap-3 p-4">
            <f.icon className="h-6 w-6 text-rose-600" />
            <div>
              <div className="text-sm font-medium text-rose-700">{f.label}</div>
              <div className="text-sm text-slate-600">{f.value}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* LETTER */}
  <section id="letter" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
    <Card className="rounded-2xl bg-white/80 border shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-700"><Heart className="h-5 w-5"/> Open Letter</CardTitle>
        <CardDescription>A message from my heart to yours</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-lg text-rose-800 leading-relaxed">
          No matter the miles, my heart is always next to yours, Shifah. I fall for you more with every sunrise and dream of the day we close the distance. Until then, this page will hold my love for you.
        </p>
      </CardContent>
    </Card>
  </section>

  {/* FOOTER */}
  <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
    <Card className="rounded-2xl bg-gradient-to-r from-pink-200 to-rose-200">
      <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm text-rose-700">Made with love by</div>
          <div className="text-lg font-semibold text-rose-800">Hashim</div>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="secondary" className="rounded-xl">
            <a href="#home"><Heart className="h-4 w-4 mr-2"/> Back to top</a>
          </Button>
        </div>
      </CardContent>
    </Card>
    <p className="text-center text-xs text-rose-600 mt-6">
      © {new Date().getFullYear()} Hashim • This page is private, for my love Shifah only.
    </p>
  </section>
</div>

); }

function getTimeLeft(target) { const now = new Date(); const total = Math.max(0, target.getTime() - now.getTime()); const days = Math.floor(total / (1000 * 60 * 60 * 24)); const hours = Math.floor((total / (1000 * 60 * 60)) % 24); const minutes = Math.floor((total / (1000 * 60)) % 60); const seconds = Math.floor((total / 1000) % 60); return { total, days, hours, minutes, seconds }; }

