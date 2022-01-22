type TMeasureBase = {
  user_id?: string
  code: string
  record: number
  stored_at: string
  description?: string
}

type TMeasureWeight = TMeasureBase & {
  code: 'weight'
}

type TMeasureBloodPressure = TMeasureBase & {
  code: 'blood-pressure'
}

type TMeasureHeartRate = TMeasureBase & {
  code: 'heart-rate'
}

export type TMeasure =
  | TMeasureWeight
  | TMeasureBloodPressure
  | TMeasureHeartRate
