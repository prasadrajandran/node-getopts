#!/usr/bin/env bash

echo "1. cleaning dist dir..."
rm -rf dist

echo "2. cleaning docs dir..."
rm -rf docs

echo "3. building..."
npm run build

echo "4. building docs..."
npm run build-docs

# Remove the first two lines from README file. The title is duplicated for
# some reason.
tail -n +3 ./docs/README.md > ./docs/temp && mv ./docs/temp ./docs/README.md

echo "5. linting..."
npm run lint

echo "6. run prettier..."
npm run prettier-fix

echo "7. testing..."
npm test

package_version=`cat package.json | grep version`
package_version=${package_version/  \"version\"\: /} # remove `  "version": `
package_version=${package_version/,/} # remove `,`

echo
echo
echo "--- RELEASE PREP COMPLETE ---"
echo
echo "- update the package version if necessary: $package_version"
echo "- push all changes to GitHub and author a release"
echo "- to publish the package run: \"npm publish --access public\""
