# GitHub Upload Guide

## If You Are New To GitHub

You only need three things:

- a GitHub account
- Git installed on your computer
- this repo folder on your machine

## Step 1. Create A New Repository On GitHub

1. Log in to GitHub.
2. Click the `+` icon in the top-right.
3. Choose `New repository`.
4. Name it something like `saas-motion-graphics-playbook`.
5. Add a short description.
6. Leave it `Public`.
7. Click `Create repository`.

Do not upload files yet if you want the cleanest route from your machine.

## Step 2. Open A Terminal In The Repo Folder

Use your local copy of the repo folder, for example:

`C:\path\to\saas-motion-graphics-playbook`

## Step 3. Run These Commands

Replace `YOUR_USERNAME` with your GitHub username.

```powershell
cd "C:\path\to\saas-motion-graphics-playbook"
git init
git add .
git commit -m "Initial commit: SaaS motion graphics playbook"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/saas-motion-graphics-playbook.git
git push -u origin main
```

## Step 4. Refresh GitHub

Open your GitHub repo page and refresh. You should see:

- the README
- docs
- prompts
- templates
- media previews

## If Git Asks You To Sign In

GitHub may ask for:

- browser sign-in
- a personal access token

If that happens, complete the login flow once and retry the push.

## Easy Drag-And-Drop Alternative

If command line feels uncomfortable:

1. Open the empty repo you created on GitHub.
2. Click `uploading an existing file`.
3. Drag the contents of the repo folder into the page.
4. Add commit message: `Initial commit`.
5. Click `Commit changes`.

This is simpler, but less ideal for future versioning.

## Good Next Steps

After upload, consider:

- adding a short LinkedIn post linking the repo
- pinning the repo on your GitHub profile
- adding a short demo video link in the README
- creating releases if you publish updated versions
