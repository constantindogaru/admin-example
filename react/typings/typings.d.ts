export interface StepCounterControl {
  current: number
  total: number
  next: () => void
  back: () => void
}
