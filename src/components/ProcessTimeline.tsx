'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FileSearch,
  Layout as LayoutIcon,
  Palette,
  Code,
  TestTube,
  Rocket,
  Wrench,
} from 'lucide-react';

const processSteps = [
  { icon: FileSearch, title: 'Анализ', description: 'Изучаем бизнес и задачи' },
  { icon: LayoutIcon, title: 'Проектирование', description: 'Создаём структуру' },
  { icon: Palette, title: 'Дизайн', description: 'Разрабатываем макеты' },
  { icon: Code, title: 'Разработка', description: 'Программируем функционал' },
  { icon: TestTube, title: 'Тестирование', description: 'Проверяем качество' },
  { icon: Rocket, title: 'Запуск', description: 'Публикуем проект' },
  { icon: Wrench, title: 'Поддержка', description: 'Сопровождаем работу' },
];

const STEPS = 7;
// Центр каждого блока в сетке 7 колонок: 1/14, 3/14, 5/14, 7/14, 9/14, 11/14, 13/14
const centerAt = (i: number) => (2 * i + 1) / 14;

const CYCLE_DURATION_MS = 14000;
// Возгорание на 5% раньше, затухание на 10% дольше
const APPROACH_BEFORE = 0.063;  // зона до центра (~+5% раньше возгорание)
const APPROACH_AFTER = 0.103;   // зона после центра (~+10% дольше затухание)

function smoothstep(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return t * t * (3 - 2 * t);
}

// Интенсивность: подъём ближе к центру (позже), спад быстрее после центра
function stepIntensity(progress: number, stepIndex: number): number {
  const center = centerAt(stepIndex);
  const start = Math.max(0, center - APPROACH_BEFORE);
  const end = Math.min(1, center + APPROACH_AFTER);
  if (progress <= start) return 0;
  if (progress >= end) return 0;
  if (progress <= center) {
    const t = (progress - start) / (center - start);
    return smoothstep(t);
  }
  const t = (progress - center) / (end - center);
  return 1 - smoothstep(t);
}

export function ProcessTimeline() {
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const raw = (elapsed / CYCLE_DURATION_MS) % 1;
      setProgress(raw);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Линия идёт непрерывно от 0 до 100%, без остановок
  const lineFillFraction = progress;

  return (
    <div className="relative min-h-[180px] overflow-x-hidden">
      {/* Background line (full width) - muted, опущена на 15px */}
      <div className="hidden lg:block absolute left-0 right-0 h-[2px] -translate-y-1/2 bg-border z-0" style={{ top: 'calc(50% + 15px)' }} />
      {/* Непрерывно движущаяся линия */}
      <div
        className="hidden lg:block absolute left-0 h-[2px] -translate-y-1/2 z-[1] rounded-full bg-primary/90"
        style={{
          top: 'calc(50% + 15px)',
          width: `${lineFillFraction * 100}%`,
          transition: 'none',
        }}
      />
      {/* Комета: яркая голова на конце линии + градиентный хвост слева */}
      <div
        className="hidden lg:block absolute z-[2] h-[3px] -translate-y-1/2 rounded-full overflow-visible"
        style={{
          top: 'calc(50% + 15px)',
          width: 160,
          left: `calc(${lineFillFraction * 100}% - 160px)`,
          background: 'linear-gradient(to right, transparent 0%, hsl(var(--primary) / 0.15) 25%, hsl(var(--primary) / 0.4) 55%, hsl(var(--primary) / 0.9) 85%, hsl(var(--primary)) 100%)',
          boxShadow: '0 0 16px hsl(var(--glow-primary) / 0.35), 0 0 32px hsl(var(--glow-primary) / 0.15)',
          transition: 'none',
        }}
      />
      {/* Яркое ядро кометы на кончике */}
      <div
        className="hidden lg:block absolute left-0 z-[3] w-3 h-3 -translate-y-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: 'calc(50% + 15px)',
          left: `${lineFillFraction * 100}%`,
          background: 'radial-gradient(circle at center, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 50%, transparent 75%)',
          boxShadow: '0 0 12px hsl(var(--glow-primary) / 0.5)',
          transition: 'none',
        }}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10 pt-4">
        {processSteps.map((step, index) => {
          const intensity = stepIntensity(progress, index);
          const isActive = intensity > 0.15; // порог: свечение на подходе линии, плавный вход/выход за счёт transition
          const Icon = step.icon;
          return (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-in-out ${
                isActive ? 'scale-105' : 'scale-100 opacity-90'
              }`}
            >
              <div
                className={`p-4 mb-3 mx-auto w-fit rounded-xl border-2 transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'bg-primary/25 border-primary shadow-[0_0_20px_hsl(var(--glow-soft))]'
                    : 'bg-primary/5 border-border/50'
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-all duration-700 ease-in-out ${
                    isActive ? 'text-primary' : 'text-primary/40'
                  }`}
                />
              </div>
              <div
                className={`text-xs font-medium mb-1 transition-all duration-700 ease-in-out ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Этап {index + 1}
              </div>
              <h3
                className={`font-semibold text-sm mb-1 transition-all duration-700 ease-in-out ${
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                }`}
                style={{ marginTop: 10 }}
              >
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
