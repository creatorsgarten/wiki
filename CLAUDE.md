# CLAUDE.md - Creatorsgarten Wiki Guidelines

## Commands

- Format front matter: `node scripts/formatFrontMatter.mjs`
- Format code: `pnpm prettier --write .`
- Run package manager: `pnpm`

## Wiki Structure

- Content is in markdown files in `/wiki` directory
- Page names use CamelCase
- Front matter in YAML format
- Template tags use Liquid syntax: `{% render 'Component', param: value %}`
- Templates are in `/wiki/Template` directory, e.g. `/wiki/Template/Component.md`

## Styling Guidelines

- Use ATX-style headers (`# Heading`) not Setext (`Heading\n====`)
- Link to other wiki pages with double brackets: `[[PageName]]`
- Use front matter for structured data (dates, locations, etc.)
- Maintain consistent indentation (2 spaces) in YAML front matter
- Keep lines reasonably short (<100 characters when possible)
- Follow existing patterns in similar files when creating new content
