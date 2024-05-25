#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# npx lint-staged
echo "
\033[1;33m🏗️👷 Styling, testing and building your project before committing\033[0m
";

# Check ESLint Standards
pnpm run lint || {
    echo "
    \033[0;31m🤡🤡🤡🤡 Your code is not properly linted. 🤡🤡🤡🤡
            ESlint Check Failed: View the errors above to see why, fix all the lint issues and run \033[1;31mpnpm run lint\033[0;31m, add changes and try commit again.\033[0m
            ";
    false;
}

# Check Prettier Standards
pnpm run format || {
    echo "
    \033[0;31m🐷🐷🐷🐷 Your code is not properly styled. 🐷🐷🐷🐷
            Prettier Check Failed: Run \033[1;31mpnpm run format-fix\033[0;31m, add changes and try commit again.\033[0m
            ";
    false;
}

# If eslint and prettier passes... Now we can try to build!!!
echo "
\033[1;36m🤔🤔🤔🤔... Alright... Code looks good to me... Trying to build now. 🛠️🛠️🛠️🛠️\033[0m
";

pnpm run build ||
(
    echo "
    \033[0;31m❌👷🔨❌ Better call the Boss... Because your build failed ❌👷🔨❌
            Next build Failed: View the errors above to see why, fix the build issues and run \033[1;31mpnpm run build\033[0;31m, add changes and try commit again.\033[0m
            "
    false;
)

# If everything passes... Now we can commit
echo "
\033[1;32m✅✅✅✅ Everything is good... 😎😎😎 Awesome... I am committing this now. ✅✅✅✅\033[0m
"
