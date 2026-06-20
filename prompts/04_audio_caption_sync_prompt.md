# Audio And Subtitle Sync Prompt

```text
I am giving you a final voiceover file and the latest visual build.

Please:
- measure the audio duration
- map each sentence to the correct scene
- retime the subtitle segments
- ensure on-screen metric callouts appear exactly when spoken
- preserve the visual design unless timing changes are required

Rules:
- subtitles should fade out gently, not hard-cut
- do not show subtitles when the exact same words are already presented prominently in the middle of the screen
- keep caption timing faithful to the actual audio, not the script alone

Return:
- timing changes
- screen-to-voiceover mapping
- any scene duration changes required
```
