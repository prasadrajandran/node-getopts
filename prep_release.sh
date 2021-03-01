#!/usr/bin/env bash

echo "1. sort package.json"
npx sort-package-json

echo "2. cleaning dist dir..."
rm -rf dist

echo "3. cleaning docs dir..."
rm -rf docs

echo "4. building..."
npm run build

echo "5. stripping comments from dist JS files..."
shopt -s globstar # enable recursive globbing
npx stripcomments ./dist/**/*.js --write --confirm-overwrite

echo "6. building docs..."
npm run build-docs

# Remove the first two lines from README file. The title is duplicated for
# some reason.
tail -n +3 ./docs/README.md > ./docs/temp && mv ./docs/temp ./docs/README.md

echo "7. linting..."
npm run lint

echo "8. run prettier..."
npm run prettier-fix

echo "9. testing..."
npm test

package_version=`cat package.json | grep version`
package_version=${package_version/  \"version\"\: /} # remove `  "version": `
package_version=${package_version/,/} # remove `,`

echo
echo "--- RELEASE PREP COMPLETE ---"
echo
echo "1. update the package version if necessary: $package_version"
echo "2. do not forget to run \"npm install\" if the package version is updated so that the lockfile is updated too"
echo "3. create PR to main (from development), merge PR, and create a GitHub release"
echo "4. switch to the main branch locally and run \"git pull\""
echo "5. to publish the package run: \"npm publish --access public\""
echo "6. switch back to development, merge main, and run \"git push\""
