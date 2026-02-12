'use client';

/**
 * Абстрактный динамический фон в стиле IT/технологий для hero-блока.
 * Многослойная анимация: орбы, сетки, диагонали, орбиты, риппли, линии, узлы, точки.
 */
export function HeroAbstractBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Базовый градиент — лёгкое «дыхание» */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-90 animate-hero-shine"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 10%, hsl(var(--primary) / 0.28) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 85% 85%, hsl(var(--primary) / 0.15) 0%, transparent 45%), radial-gradient(ellipse 50% 80% at 10% 60%, hsl(var(--primary) / 0.1) 0%, transparent 45%)',
        }}
      />
      {/* Плавающие орбы — больше слоёв */}
      <div
        className="absolute w-[60%] h-[50%] top-[10%] left-[20%] rounded-full opacity-60 animate-hero-orb"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[40%] h-[40%] top-[50%] right-[5%] rounded-full opacity-50 animate-hero-orb"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="absolute w-[35%] h-[45%] bottom-[15%] left-[10%] rounded-full opacity-40 animate-hero-orb"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
          animationDelay: '-12s',
        }}
      />
      <div
        className="absolute w-[25%] h-[35%] top-[30%] left-[55%] rounded-full opacity-35 animate-hero-orb"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.22) 0%, transparent 70%)',
          animationDelay: '-3s',
        }}
      />
      <div
        className="absolute w-[30%] h-[25%] top-[70%] right-[25%] rounded-full opacity-30 animate-hero-orb"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)',
          animationDelay: '-9s',
        }}
      />
      {/* Сетка 1 — дрейф */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18] animate-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Сетка 2 — обратный дрейф, мельче */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] animate-grid-drift-reverse"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Сетка 3 — диагональная, дрейф */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1] animate-hero-diagonal"
        style={{
          backgroundImage: `
            linear-gradient(135deg, hsl(var(--primary) / 0.35) 1px, transparent 1px),
            linear-gradient(45deg, hsl(var(--primary) / 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* SVG: схемы + анимированные линии «поток данных» */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.25] dark:opacity-[0.3]"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradVert" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Горизонтальные шины с «бегущим» пунктиром */}
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGrad)" strokeWidth="0.8" className="animate-pulse" />
        <line x1="0" y1="55%" x2="90%" y2="55%" stroke="url(#lineGrad)" strokeWidth="0.6" opacity="0.8" />
        <line x1="0" y1="78%" x2="70%" y2="78%" stroke="url(#lineGrad)" strokeWidth="0.5" opacity="0.6" />
        {/* Пунктирные линии — эффект потока данных */}
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" strokeDasharray="20 20" className="animate-hero-line-flow" style={{ animationDuration: '2.5s', animationDelay: '0s' }} />
        <line x1="0" y1="55%" x2="90%" y2="55%" stroke="hsl(var(--primary) / 0.4)" strokeWidth="0.8" strokeDasharray="15 15" className="animate-hero-line-flow" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        <line x1="0" y1="78%" x2="70%" y2="78%" stroke="hsl(var(--primary) / 0.35)" strokeWidth="0.6" strokeDasharray="12 12" className="animate-hero-line-flow" style={{ animationDuration: '2.8s', animationDelay: '1s' }} />
        {/* Вертикальные связи */}
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#lineGradVert)" strokeWidth="0.5" opacity="0.8" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#lineGradVert)" strokeWidth="0.5" opacity="0.6" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#lineGradVert)" strokeWidth="0.5" opacity="0.5" />
        {/* Узлы — пульсация */}
        {[
          [15, 25], [35, 25], [65, 25], [85, 25],
          [25, 55], [50, 55], [75, 55],
          [30, 78], [60, 78],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r="3"
            fill="none"
            stroke="hsl(var(--primary) / 0.5)"
            strokeWidth="0.8"
            className="animate-hero-pulse"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
        {/* Диагональные связи */}
        <line x1="0" y1="0" x2="30%" y2="40%" stroke="hsl(var(--primary) / 0.12)" strokeWidth="0.5" strokeDasharray="8 8" className="animate-hero-line-flow" style={{ animationDuration: '4s', animationDelay: '0.2s' }} />
        <line x1="100%" y1="0" x2="70%" y2="35%" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.5" strokeDasharray="6 6" className="animate-hero-line-flow" style={{ animationDuration: '3.5s', animationDelay: '1.2s' }} />
        <line x1="100%" y1="100%" x2="60%" y2="70%" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.5" strokeDasharray="8 8" className="animate-hero-line-flow" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }} />
        {/* Доп. малые узлы */}
        {[
          [40, 40], [70, 45], [10, 65], [90, 70], [55, 85],
        ].map(([x, y], i) => (
          <circle
            key={`small-${i}`}
            cx={`${x}%`}
            cy={`${y}%`}
            r="1.5"
            fill="hsl(var(--primary) / 0.4)"
            className="animate-hero-dot-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>
      {/* Орбитальные элементы — два центра вращения */}
      <div className="absolute top-[35%] left-[25%] w-32 h-32 -translate-x-1/2 -translate-y-1/2" aria-hidden>
        <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 animate-hero-orbit" />
        <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 animate-hero-orbit" style={{ animationDelay: '-5s' }} />
        <div className="absolute left-1/2 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 animate-hero-orbit-slow" style={{ animationDelay: '-10s' }} />
      </div>
      <div className="absolute top-[60%] right-[30%] w-24 h-24 translate-x-1/2 -translate-y-1/2" aria-hidden>
        <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 animate-hero-orbit-slow" />
        <div className="absolute left-1/2 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 animate-hero-orbit" style={{ animationDelay: '-7s' }} />
      </div>
      {/* Ринглы-риппли (расходящиеся круги) */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute top-[45%] left-[50%] w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-hero-ripple pointer-events-none"
          style={{ animationDelay: `${i * 1}s` }}
        />
      ))}
      {[0, 1].map((i) => (
        <div
          key={`r2-${i}`}
          className="absolute top-[55%] right-[20%] w-16 h-16 translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25 animate-hero-ripple pointer-events-none"
          style={{ animationDelay: `${i * 1.2 + 0.5}s` }}
        />
      ))}
      {/* Плавающие точки — больше, разная анимация */}
      <div className="absolute inset-0">
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-[0.5px] ${
              i % 5 === 0 ? 'animate-hero-float-fast bg-primary/70' :
              i % 5 === 1 ? 'animate-hero-float-slow bg-primary/60' :
              i % 5 === 2 ? 'animate-hero-dot-pulse bg-primary/80' :
              i % 5 === 3 ? 'animate-hero-drift-x bg-primary/50' : 'animate-float bg-primary/60'
            }`}
            style={{
              width: i % 6 === 0 ? 6 : i % 4 === 2 ? 2 : 4,
              height: i % 6 === 0 ? 6 : i % 4 === 2 ? 2 : 4,
              left: `${2 + (i * 3.2) % 96}%`,
              top: `${2 + (i * 7) % 96}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: i % 5 >= 2 ? undefined : i % 5 === 1 ? undefined : `${5 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
      {/* Мелкие «крестики» / данные — дрейф */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          [12, 18], [78, 22], [45, 38], [22, 72], [88, 65], [55, 88], [8, 50], [92, 55],
        ].map(([x, y], i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rotate-45 bg-primary/40 animate-hero-drift-x"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
      {/* Верхнее свечение — лёгкая пульсация */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[50%] opacity-25 dark:opacity-35 animate-hero-shine"
        style={{
          background: 'radial-gradient(ellipse 50% 100% at 50% 0%, hsl(var(--primary) / 0.45), transparent 65%)',
          animationDuration: '5s',
        }}
      />
    </div>
  );
}
