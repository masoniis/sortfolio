# The justfile stores all the useful commands for project development

set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]
root := justfile_directory()

# default recipe
[private]
default:
    @just --list --unsorted

# INFO: -----------------
#         running
# -----------------------

# Run the dev server (exposed on the local network)
[group("run")]
dev:
    bun run dev

# Build the site and serve the production build locally
[group("run")]
preview: build
    bun run preview

# INFO: -----------------
#         building
# -----------------------

# Build the production site
[group("build")]
build:
    bun run build

# Type check svelte and ts files
[group("build")]
check:
    bun run check

# Type check continuously on file changes
[group("build")]
check-watch:
    bun run check:watch

# INFO: -----------------
#       dependencies
# -----------------------

# Install dependencies from the lockfile
[group("deps")]
install:
    bun install

# Update dependencies within their package.json ranges
[group("deps")]
update:
    bun update

# Update the nix flake inputs
[group("deps")]
update-flake:
    nix flake update

# INFO: -----------------
#         cleaning
# -----------------------

# Remove build output and caches
[group("clean")]
clean:
    rm -rf "{{ root }}/.svelte-kit" "{{ root }}/.vercel" "{{ root }}/build"
