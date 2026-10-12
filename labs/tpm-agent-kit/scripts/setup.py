#!/usr/bin/env python3
"""Create an isolated workspace. Never overwrite an existing destination."""
import argparse
from pathlib import Path
import shutil

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--workspace', required=True, type=Path)
    args = parser.parse_args()
    source = Path(__file__).resolve().parents[1]
    target = args.workspace.expanduser().resolve()
    if target == source or source in target.parents and target.exists():
        parser.error('Destination already exists; choose a new directory.')
    if target.exists():
        parser.error('Destination already exists; no files were changed.')
    target.mkdir(parents=True, exist_ok=False)
    for name in ['AGENTS.md', 'CLAUDE.md', 'system-prompt.md', 'context', 'workflows', 'templates', 'workspace']:
        item = source / name
        if item.is_dir(): shutil.copytree(item, target / name)
        else: shutil.copy2(item, target / name)
    print(f'Created TPM workspace: {target}')
    print('Read AGENTS.md, fill context/program-profile.md, then supply program evidence.')

if __name__ == '__main__': main()
