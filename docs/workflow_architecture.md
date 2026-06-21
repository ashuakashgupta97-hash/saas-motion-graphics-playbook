# Workflow Architecture

## High-Level System

The production stack can be understood as six cooperating layers:

1. business context
2. narrative strategy
3. visual references
4. motion build system
5. audio and captions
6. packaging and QA

## Architecture Diagram In Words

`Brief + screenshots + examples + references -> AI-assisted planning -> storyboard + prompts -> HyperFrames composition -> voiceover/captions sync -> QA -> snippets + release assets`

## Role Of Each Part

### AI-Assisted Planning

AI assistance can help with the orchestration layer:

- read context and source files
- summarize business logic
- turn rough direction into structured plans
- write prompts, scripts, and build notes
- update timing and captions
- support documentation and release preparation

In practice, this works best when you treat AI as a planning and structuring partner rather than a replacement for direction, timing judgment, or visual taste.

### HyperFrames

HyperFrames acted as the main production surface:

- HTML scene layout
- CSS visual system
- GSAP sequencing
- programmatic screen reveals
- subtitle band integration
- timeline-driven motion control

Use HyperFrames when:

- you want precise control
- scenes mix screenshots and designed motion
- multiple sections share one style system

### Remotion

Remotion was useful as optional support, not as the required main path:

- isolated inserts
- heavy card cascades
- quick React-based previs
- experiments that are easier in component form

If you do not need it, skip it. If you do, keep Remotion modular and export inserts back into the main flow.

### Screenshots And Mockups

Screenshots carried credibility. Designed inserts carried explanation.

A healthy split is:

- real UI for proof
- designed motion for invisible logic
- generated placeholders only where the product has no useful visual

### Voiceover

Voiceover acts as the timing skeleton:

- scene durations are measured against spoken lines
- reveals should land on key phrases
- KPI numbers should appear when named
- ending lockups should not fight the narration

### Captions

Captions are not just accessibility. They also help executive viewers track dense information.

Best practice:

- keep them in a dedicated lower band
- avoid showing them when the same line already dominates the center screen
- fade them in and out rather than hard-cutting

### FFmpeg

FFmpeg handles the finishing layer:

- extracting short snippets
- generating a README preview GIF
- capturing poster frames
- verifying durations and media health
- adding subtle redaction boxes if needed

## File Relationships

The public repo is structured so each layer has a place:

- `docs/` explains the process
- `prompts/` captures reusable instruction patterns
- `storyboard/` shows planning artifacts
- `templates/` gives copy-paste starting points
- `starter-kit/` contains reusable motion code
- `media/` contains presentation-friendly outputs

## When Something Is Inferred

Not every detail of the original production is visible as a single file. Where this repo infers a likely workflow from the available materials, it describes that as a suggested pattern and notes that you should adapt it to your own toolchain.
