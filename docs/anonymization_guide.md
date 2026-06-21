# Public Release Checklist

## Goal

Turn a private internal video project into a public-safe portfolio or GitHub artifact without exposing:

- company names
- internal product names
- logos
- personal emails
- employee names
- IDs or claim numbers
- dashboard values that should remain private

## Redaction Strategy

Use the lightest-touch method that keeps visuals strong.

### Preferred Order

1. replace private screenshots with generic placeholders
2. crop to safe areas
3. mask only the sensitive region
4. rebuild the scene with mock data if needed

Avoid:

- blurring the entire frame
- destroying legibility
- shipping an over-redacted sample that no longer looks premium

## Text And Docs

Search for and remove:

- company name
- product codename
- personal names
- email addresses
- internal folder names copied into docs

Recommended search terms:

- organization name
- product name
- stakeholder names
- `.com`
- `@`
- any internal acronym you recognize

## Screenshots

Check screenshots for:

- logos in headers
- organization names in nav bars
- internal dashboard labels
- user avatars
- email addresses
- data tables with identifiable rows

Options:

- cover the logo with a design-consistent block
- swap the screenshot for a generic mockup
- crop the frame to the relevant interaction

## Video Snippets

For public teaser snippets:

- choose sections that are visually strong and low-risk
- avoid scenes whose main message depends on a private screen
- use FFmpeg `drawbox` overlays for small logo redactions

Example approach:

- pick a safe time range
- add a small dark box over the logo area
- export the snippet
- verify the result still feels polished

## Audio

Listen for:

- spoken organization names
- internal product names
- employee names
- private operational metrics

If present:

- re-record a neutral version
- or avoid publishing the affected section

## README And Thumbnails

Public previews often leak private context because they are created quickly. Double-check:

- preview image
- GIF
- contact sheet
- linked MP4 poster frame

## Safe Language Patterns

Replace specifics with neutral phrases:

- `our company` -> `the organization`
- internal product codename -> `existing platform`
- business unit names -> `across teams` or `across divisions`

## Final Checklist

- no company name in docs
- no logo in public media
- no internal app name in screenshots or captions
- no private email in copied prompts
- no hidden metadata paths in README copy
