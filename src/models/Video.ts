import { CodingSequence } from './CodingSequence'
import { VideoInfo } from './VideoInfo'

export type Video = {
  header: VideoInfo
  value: CodingSequence[]
}
