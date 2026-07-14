# Deployment Guide for Osta App

## Prerequisites
- GitHub account (already have it)
- Vercel account (free tier available)
- Supabase project (already created)

## Quick Deployment Steps

### 1. Deploy to Vercel (Recommended)

**Option A: Using Vercel Dashboard**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select `ostaaiuae-hue/osta-app` repository
5. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` → Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Your Supabase Anon Key
6. Click "Deploy"

**Option B: Using Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### 2. Environment Variables in Vercel

Add these in Vercel Project Settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Get Your Supabase Credentials

1. Go to https://supabase.com
2. Open your project
3. Click "Settings" → "API"
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Setup Supabase Auth

In Supabase Dashboard:
1. Go to **Authentication** → **Providers**
2. Enable **Email** (already enabled by default)
3. Go to **URL Configuration**
4. Add your Vercel URL to:
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/auth/callback`

### 5. Custom Domain (Optional)

In Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS setup instructions

## Your Live URL Will Be
```
https://osta-app.vercel.app
```

## Checklist Before Going Live

- [ ] Supabase project created
- [ ] Environment variables added to Vercel
- [ ] Email authentication enabled in Supabase
- [ ] Redirect URLs configured
- [ ] Test signup/login flow
- [ ] Test on mobile devices
- [ ] Check database is accessible

## Post-Deployment Monitoring

Monitor from Vercel Dashboard:
- Deployments
- Analytics
- Error logs
- Performance metrics

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
