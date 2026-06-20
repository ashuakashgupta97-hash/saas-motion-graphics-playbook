# Prompting Strategy

## Why Prompting Mattered

The strongest outputs did not come from one giant prompt. They came from staged prompting:

- context first
- then story
- then direction
- then assets
- then build execution
- then sync and QA

This structure reduced hallucination and made the output much more production-ready.

## The Prompting Progression

### Stage 1. Context Gathering

Goal:

- help the model understand the workflow deeply before proposing visuals

Prompt pattern:

- here is the business context
- here are the screenshots and documents
- here is the rough objective of the film
- build strong context first, do not jump to editing

### Stage 2. Motion Research

Goal:

- translate animation references into reusable visual direction

Prompt pattern:

- inspect these reference links
- identify which motions are useful
- describe them as reusable scene strategies
- explain how they can be adapted to my story

### Stage 3. Video Direction

Goal:

- convert a script into a directorial plan

Prompt pattern:

- for each narration segment, specify:
- on-screen text
- screenshot focus
- motion reference
- zoom or click target
- pacing intent
- what should feel dramatic or premium

### Stage 4. Asset Planning

Goal:

- discover which screenshots, mockups, and inserts are still missing

Prompt pattern:

- list the exact assets needed scene by scene
- if a screenshot is needed, describe it so it can be generated or captured consistently

### Stage 5. Build Brief

Goal:

- turn strategy into implementation language

Prompt pattern:

- convert the storyboard into a HyperFrames-ready build brief
- include scene timings, transitions, asset roles, audio behavior, and subtitle rules

### Stage 6. Audio/Caption Sync

Goal:

- make the film feel intentional rather than loosely timed

Prompt pattern:

- map each spoken line to the correct scene
- retime subtitles
- ensure KPI animations appear exactly when spoken
- avoid changing visuals unless timing requires it

### Stage 7. Public Packaging

Goal:

- convert a private production into a reusable educational repo

Prompt pattern:

- inspect the project deeply
- extract the process
- anonymize names and logos
- package prompts, docs, templates, and safe snippets for GitHub

## Practical Prompting Rules

- ask for context building before creative direction
- ask for scene maps before animation code
- ask for exact screenshot prompts before mockup generation
- ask for public anonymization as a separate pass
- separate script polish from timeline sync

## What Worked Best

- specific reference links
- explicit timing goals
- clear audience definition
- saying what not to do
- treating the model like a strategist first and an animator second

## What To Avoid

- one huge prompt with research, storytelling, rendering, and QA mixed together
- asking for “something premium” without showing references
- asking for animation without a script map
- sharing private screenshots without planning redaction

## Related Files

See the reusable prompt files in [`../prompts`](../prompts).
