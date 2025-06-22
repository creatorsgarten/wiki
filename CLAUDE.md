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

## Important Directories

### Event-related directories
- `Events/` - Individual event pages with structured metadata (see `wiki/Events.md` for guidelines and templates)
- `Coverage/` - Post-event documentation including media, write-ups, photos (see `wiki/Coverage.md` for categories)
- `OrganizerNotes/` - Internal event planning documentation made public by default (see `wiki/OrganizerNotes.md`)
- `Feedback/` - Post-event feedback collection with structured analysis (see `wiki/Feedback.md` for form templates)
- `Sponsorship/` - Sponsorship proposals and financial information for events

### Working group directories
- `WorkingGroups/` - Event-specific and initiative-based working groups (see `wiki/WorkingGroups.md` for structure)

### People-related directories
- `People/` - Individual contributor profiles with structured schema (see `wiki/People.md` for profile guidelines)

### Wiki navigation
- When encountering `[[WikiLink]]` syntax, read the corresponding file at `/wiki/WikiLink.md`
- Before editing files in these namespaces, read the relevant documentation page to understand structure, conventions, and templates
- Note: people, events, and working groups use lowercase slugs; other wiki pages use PascalCase
