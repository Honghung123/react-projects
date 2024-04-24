# Getting Started with Create React App

## 1. Why should we install a library called `customize-cra`?

-   As we know, using the 'create-react-app' tool, this library has built-in configuration. So, you will see there is no configuration file here at all
-   In the future, if we want to customize the Webpack configuration, how do we do that?
-   There is an option that you guys run the command `npm run eject`. This command will eject all the react structures out. This is the way we should not and also involuntarily there is no other way so we do that.

## 2. Installation

-   First, run `npm i customize-cra react-app-rewired -D`. See more at [Customize CRA - github](https://github.com/arackaf/customize-cra?tab=readme-ov-file)
-   Second, follow the instruction in [React App Rewired](https://github.com/timarney/react-app-rewired/)
-   Then, install **babel-plugin-module-resolver** by running `npm i babel-plugin-module-resolver -D`.
    -   Specify the plugin in your `.babelrc` or `.babelrc.js` following this instruction: [Specify content for .babelrc](https://www.npmjs.com/package/babel-plugin-module-resolver#:~:text=plugin%20in%20your-,.babelrc,-with%20the%20custom)
-
-   Install sass: `npm i sass`, then install **normalizeCSS**(A modern alternate for CSS resets): `npm i normalize.css`
-   Install classnames lib: `npm i classnames` to support class name having hyphen(dau gach ngang). This make more easier to use class name when compared to clsx lib(dung clsx cung duoc nhung se rat xau, dai dong)

## 3. Implementation

> Install **ES7+ React/Redux/React-Native snippets** to reference some important snippets: [React snippets](https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

-   Analyze the page and calculate the main layout of the page
-   Create GlobalStyles component, then import normalizeCSS: `@import 'normalize.css'`, them import a font: `@import url(link font you want to use)`.
-   Specify all variables in `:root`, set font-size to easily calculate in `html` by **62.5%**. Set box-size for all element by `*{ box-sizing: border-box; }`. Finally, set some default properties in `body` like: `font-family:'Font', sans-serif; font-size: 1.6rem; line-height: 1.5; text-rendering: optimizeSpeed; ...`
-   Move routes configuration out to a separate place.
-   Build load Layout mechanism.

### Y tuong cua menu 2 cap

-   Ý tưởng là state chứa 1 array, trong array đó có object(s): dạng như là: [{__},{__},...{__}].
    -   Luật là: luôn dùng object cuối cùng để map ra UI.
    -   Ban đầu state có 1 object là {data: items} => items (level.1) sẽ được map ra UI. Trong các phần tử của items nếu users click vào phần tử cha a.k.a phần tử có "children" thì tiến hành set state để thêm mảng children này vào state, => lúc này "children"(level 2) sẽ là object cuối cùng trong mảng và theo luật thì sẽ được render ra, nếu users tiếp tục chọn vào option mà nó có "children" (level 3) thì sẽ tiếp tục có mảng mới và setState => render mảng mới ra UI.
    -   Khi ấn back thì tiến hành xoá phần tử cuối cùng để render ra phần tử trước đó.
