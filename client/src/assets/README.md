# Assets Organization

This document describes the organized structure of the assets folder for the Talal Portfolio project.

## Folder Structure

```
assets/
├── achievements/          # Achievement and award images
│   ├── Aqua_Best Research_Paper_Award.png
│   ├── DCPC.JPEG
│   ├── Dean.JPEG
│   ├── Ibri_Marathon.jpg
│   ├── LNG_Program.JPG
│   ├── MCBC.jpg
│   ├── Sons_Of_Ahmed.JPG
│   └── Trustworthy_certificate.png
│
├── certificates/          # Certificate images (PNG/JPG)
│   ├── certificate_Java.png
│   ├── certificate_js.png
│   ├── certificate_network_v7.png
│   └── certificate_SQL.png
│
├── certificats/          # Certificate PDFs
│   ├── certificate_Aqua_Sink_Pro.pdf
│   ├── certificate_Java.pdf
│   ├── certificate_JavaScript.pdf
│   ├── certificate_Networks.pdf
│   ├── certificate_sql.pdf
│   └── certificate_Trustworthy.pdf
│
├── logos/                # Company/institution logos
│   ├── JBZ.jpg
│   ├── MOH_v1_0.jpg
│   ├── UTAS.jpg
│   └── UTAS_Logo.png
│
├── profile/              # Profile picture and personal documents
│   ├── IMG_7959.JPEG
│   ├── Profile_picture.JPEG
│   └── Talal CV.pdf
│
└── projects/             # Project images
    └── sasa.png
```

## Updated Import Paths

### experience.js
- Company/institution logos: `../assets/logos/`
- Certificate images: `../assets/certificates/`
- Certificate PDFs: `../assets/certificats/` (unchanged)

### achievements.js
- Achievement images: `../assets/achievements/`

### socials.js
- Profile picture and CV: `../assets/profile/`

### projects.js
- Project images: `/assets/projects/` (public path)

## Notes

1. **Certificate naming**: Both `certificates/` (images) and `certificats/` (PDFs) are maintained to preserve the existing structure
2. **Public assets**: Some logo references in certifications use public paths and may need actual logo files
3. **Project images**: Most project images referenced in projects.js may need to be added to the projects folder
4. **Consistent organization**: All related assets are now grouped by type for better maintainability

## Benefits

- **Better organization**: Related files are grouped together
- **Easier maintenance**: Clear separation of different asset types
- **Scalability**: Easy to add new assets in appropriate categories
- **Consistent naming**: Following the existing `certificats` folder pattern
