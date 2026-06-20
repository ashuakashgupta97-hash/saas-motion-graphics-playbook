# Production Pipeline

## Goal

Turn a complex product, workflow, or transformation story into a premium launch-style video using AI assistance, structured prompting, and programmable motion graphics.

## End-To-End Pipeline

### 1. Gather Source Context

Collect everything before you write visuals:

- product screenshots
- dashboards
- story notes
- internal problem statement
- voice notes or rough briefs
- example documents or inputs
- visual references from animation websites

Practical rule:

- if a screenshot increases trust, keep it
- if a concept is invisible, plan a motion-graphics scene for it

### 2. Find The Real Story

Do not jump into editing. First answer:

- what existed before
- what pain still remained
- what AI or product layer changed
- what the audience should believe by the end

Convert that into a narrative arc:

1. context
2. pain point
3. complexity
4. solution reveal
5. proof
6. impact
7. final positioning

### 3. Research Motion References

Use reference sites, launch videos, and motion-template libraries to study:

- title reveals
- UI pans
- multi-window compositions
- cursor-led interactions
- dashboard reveals
- route/path animations
- KPI callouts

Important:

- study choreography, not just color
- translate the reference into your own brand/style system

### 4. Convert Script Into Direction

For every voiceover section, decide:

- what appears on screen
- what must be real UI
- what should be a designed insert
- what should be highlighted, clicked, or zoomed
- what emotional tone the scene should create

This is where the video becomes directional rather than descriptive.

### 5. Build A Scene Map

Create a table with:

- scene number
- timestamp
- voiceover lines
- visual goal
- asset list
- transition type
- caption content

This becomes the timing contract for production.

### 6. Prepare Assets

Sort assets into:

- real screenshots
- generated mockups
- document crops
- logos or lockups
- icons
- fonts
- voiceover
- UI sound effects

Public-repo note:

- when sharing externally, anonymize screenshots or replace them with placeholders

### 7. Build The Motion System

In the source project, HyperFrames handled the master composition. A practical setup looks like:

- HTML scene containers
- CSS design system
- GSAP timeline orchestration
- separate helper functions for recurring patterns

Optional:

- use Remotion for a dense insert or a fast previs if that is easier in React

### 8. Sync Voiceover And Captions

Treat the audio as a timing spine:

- measure exact duration
- map each sentence to a scene
- adjust scene holds to match spoken emphasis
- use captions only where they help rather than repeating giant on-screen titles

### 9. QA The Experience

Check:

- does each scene match the spoken line
- do captions align to actual audio
- do screenshots remain legible
- do overlays avoid collisions with captions
- do KPI numbers appear when spoken
- do transitions feel premium rather than abrupt

### 10. Package For Delivery

Render:

- main MP4
- contact sheet or QA stills
- teaser snippets
- GIF or thumbnail for sharing

Use FFmpeg for:

- clipping
- GIF generation
- contact sheets
- light redaction overlays when needed

## Practical Toolchain

This playbook reflects a setup that used:

- paid Codex access for orchestration, prompt iteration, and implementation support
- HyperFrames connectivity for scene-based HTML video production
- optional Remotion support for isolated scenes
- FFmpeg for packaging and previews

If your setup differs, adapt the method rather than copying the exact toolchain.
