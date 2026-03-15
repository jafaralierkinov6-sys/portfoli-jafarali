import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Search, Play, Square, RotateCcw, Plus, Trash2, Check, Github, Globe, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// 1. Calculator
export function CalculatorDemo() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNum = (num: string) => {
    setDisplay(prev => prev === "0" ? num : prev + num);
  };

  const handleOp = (op: string) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation("");
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <div className="w-full max-w-xs mx-auto glass-card p-6 rounded-3xl">
      <div className="bg-background/50 rounded-xl p-4 mb-4 text-right">
        <div className="text-muted-foreground text-sm h-6">{equation}</div>
        <div className="text-3xl font-mono font-semibold tracking-tighter truncate">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button variant="secondary" onClick={clear} className="col-span-2">AC</Button>
        <Button variant="secondary" onClick={() => setDisplay(display.slice(0, -1) || "0")}>DEL</Button>
        <Button variant="default" onClick={() => handleOp("/")}>÷</Button>
        
        {['7','8','9'].map(n => <Button key={n} variant="outline" onClick={() => handleNum(n)}>{n}</Button>)}
        <Button variant="default" onClick={() => handleOp("*")}>×</Button>
        
        {['4','5','6'].map(n => <Button key={n} variant="outline" onClick={() => handleNum(n)}>{n}</Button>)}
        <Button variant="default" onClick={() => handleOp("-")}>-</Button>
        
        {['1','2','3'].map(n => <Button key={n} variant="outline" onClick={() => handleNum(n)}>{n}</Button>)}
        <Button variant="default" onClick={() => handleOp("+")}>+</Button>
        
        <Button variant="outline" onClick={() => handleNum("0")} className="col-span-2">0</Button>
        <Button variant="outline" onClick={() => handleNum(".")}>.</Button>
        <Button variant="default" onClick={calculate} className="bg-accent hover:bg-accent/90 text-white">=</Button>
      </div>
    </div>
  );
}

// 2. Todo List
export function TodoDemo() {
  const [tasks, setTasks] = useState<{id: number, text: string, done: boolean}[]>([
    { id: 1, text: "Learn React 19", done: true },
    { id: 2, text: "Build an awesome portfolio", done: false },
    { id: 3, text: "Master Tailwind CSS v4", done: false },
  ]);
  const [input, setInput] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={add} className="flex gap-2 mb-6">
        <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Add a new task..." className="bg-background/50 backdrop-blur-sm" />
        <Button type="submit"><Plus className="w-4 h-4 mr-2"/> Add</Button>
      </form>
      <div className="space-y-2">
        {tasks.map(t => (
          <div key={t.id} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${t.done ? 'bg-primary/5 border-primary/20' : 'bg-card border-border'}`}>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setTasks(tasks.map(x => x.id === t.id ? {...x, done: !x.done} : x))}
                className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${t.done ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground'}`}
              >
                {t.done && <Check className="w-3 h-3" />}
              </button>
              <span className={`${t.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>{t.text}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setTasks(tasks.filter(x => x.id !== t.id))} className="text-destructive hover:bg-destructive/10 hover:text-destructive">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {tasks.length === 0 && <p className="text-center text-muted-foreground py-8">No tasks left! 🎉</p>}
      </div>
    </div>
  );
}

// 3. Digital Clock
export function ClockDemo() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="glass-card px-12 py-8 rounded-[3rem] text-center shadow-2xl shadow-primary/20 border-t border-white/20">
        <div className="text-6xl md:text-8xl font-display font-bold text-gradient tabular-nums tracking-tighter">
          {format(time, 'HH:mm:ss')}
        </div>
        <div className="text-xl md:text-2xl text-muted-foreground mt-4 font-medium">
          {format(time, 'EEEE, MMMM do, yyyy')}
        </div>
      </div>
    </div>
  );
}

// 4. Stopwatch
export function StopwatchDemo() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setTime(t => t + 10), 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning]);

  const ms = time % 1000;
  const s = Math.floor(time / 1000) % 60;
  const m = Math.floor(time / 60000);

  return (
    <div className="w-full max-w-sm mx-auto glass-card p-8 rounded-3xl text-center">
      <div className="text-5xl font-mono font-bold tabular-nums mb-8 text-foreground">
        {m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}.<span className="text-muted-foreground text-3xl">{Math.floor(ms/10).toString().padStart(2, '0')}</span>
      </div>
      <div className="flex justify-center gap-4">
        <Button size="lg" onClick={() => setIsRunning(!isRunning)} className={isRunning ? "bg-amber-500 hover:bg-amber-600 text-white" : "bg-primary hover:bg-primary/90"}>
          {isRunning ? <><Square className="w-4 h-4 mr-2"/> Stop</> : <><Play className="w-4 h-4 mr-2"/> Start</>}
        </Button>
        <Button size="lg" variant="outline" onClick={() => { setIsRunning(false); setTime(0); }}>
          <RotateCcw className="w-4 h-4 mr-2"/> Reset
        </Button>
      </div>
    </div>
  );
}

// 5. GitHub Search
export function GitHubDemo() {
  const [username, setUsername] = useState("octocat");
  const [search, setSearch] = useState("octocat");

  const { data, isLoading, error } = useQuery({
    queryKey: ['github-user', search],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/${search}`);
      if (!res.ok) throw new Error("User not found");
      return res.json();
    },
    retry: false
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) setSearch(username.trim());
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={onSubmit} className="flex gap-2 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Search GitHub username..." 
            className="pl-9 bg-background/50"
          />
        </div>
        <Button type="submit">Search</Button>
      </form>

      {isLoading && <div className="text-center py-8 text-muted-foreground animate-pulse">Searching the Octoverse...</div>}
      {error && <div className="text-center py-8 text-destructive">User not found. Try another username.</div>}
      
      {data && !isLoading && !error && (
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-start gap-4">
            <img src={data.avatar_url} alt={data.login} className="w-20 h-20 rounded-full ring-4 ring-primary/20" />
            <div>
              <h3 className="text-xl font-bold text-foreground">{data.name || data.login}</h3>
              <a href={data.html_url} target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm flex items-center gap-1">
                <Github className="w-3 h-3" /> @{data.login}
              </a>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{data.bio || "No bio available."}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50 text-center">
            <div>
              <div className="text-2xl font-bold">{data.public_repos}</div>
              <div className="text-xs text-muted-foreground">Repos</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{data.followers}</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{data.following}</div>
              <div className="text-xs text-muted-foreground">Following</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 6. Movie Website snippet
export function MovieDemo() {
  const movies = [
    { title: "Dune: Part Two", year: "2024", rating: "8.8", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop" }, // abstract desert
    { title: "Oppenheimer", year: "2023", rating: "8.3", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop" }, // space/galaxy
    { title: "Interstellar", year: "2014", rating: "8.7", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" }, // stars
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {movies.map(m => (
        <div key={m.title} className="group relative rounded-xl overflow-hidden aspect-[2/3] cursor-pointer">
          <img src={m.img} alt={m.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
            <h4 className="text-white font-bold text-lg leading-tight">{m.title}</h4>
            <div className="flex items-center justify-between mt-2">
              <span className="text-white/70 text-sm">{m.year}</span>
              <span className="flex items-center text-amber-400 text-sm font-medium"><Star className="w-3 h-3 mr-1 fill-current" />{m.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
