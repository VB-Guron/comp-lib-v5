── components
│   ├── common
│   │   ├── LoadingOverlay
│   │   │   ├── loadingoverlay.scss
│   │   │   └── loadingoverlay.tsx
│   │   ├── MatrixInput
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── Modal
│   │   │   ├── index.ts
│   │   │   ├── modal.scss
│   │   │   └── modal.tsx
│   │   ├── ModalDivider
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── ModalWithOutline
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── NotificationBox
│   │   │   ├── index.module.scss
│   │   │   └── index.tsx
│   │   ├── NotificationToast
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── SideFilterStationary
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── SkeletonSpan
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── StepsMaker
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   └── Table
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── layout
│   │   ├── ContentMargin
│   │   │   ├── content-margin.scss
│   │   │   └── content-margin.tsx
│   │   ├── FlexFieldRow
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── FlexFieldRowWrap
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── FlexiRowMatrix
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   ├── FlexiRowMatrixLeftAlign
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   └── FlexRow
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── theme-provider.tsx
│   ├── ui
│   │   ├── avatar.tsx
│   │   ├── bg-demo.tsx
│   │   ├── button-container.tsx
│   │   ├── button.tsx
│   │   ├── checkboxgroup.tsx
│   │   ├── combobox.tsx
│   │   ├── command.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── footer
│   │   │   ├── footer.scss
│   │   │   ├── footer.tsx
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── form.tsx
│   │   ├── index.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── navigation-bar
│   │   │   ├── assets
│   │   │   │   ├── payplus-logo-dark.png
│   │   │   │   └── payplus-logo.png
│   │   │   ├── hooks.ts
│   │   │   ├── index.ts
│   │   │   ├── nav-area-updated.tsx
│   │   │   ├── navigation-bar.scss
│   │   │   ├── navigation-bar.tsx
│   │   │   ├── sample-data.ts
│   │   │   ├── side-nav.tsx
│   │   │   ├── sub-acc.tsx
│   │   │   └── types.ts
│   │   ├── popover.tsx
│   │   ├── search.tsx
│   │   ├── skeleton.tsx
│   │   ├── table.tsx
│   │   ├── textarea.tsx
│   │   ├── toggle.tsx
│   │   └── upload
│   │       ├── upload.scss
│   │       └── upload.tsx
│   └── upgraded
│       ├── checkboxgroup-form.tsx
│       ├── dropdown-form.tsx
│       ├── fieldset-form-input.tsx
│       ├── fieldset-form-textarea.tsx
│       ├── toggle-form.tsx
│       └── upload-form.tsx
├── config
│   └── images.ts
├── hooks
│   └── useTablePagination.ts
├── index.ts
├── lib
│   └── utils.ts
├── stories
│   ├── Common
│   │   ├── ModalDivider.stories.tsx
│   │   ├── Modal.stories.tsx
│   │   ├── ModalWithOutline.stories.tsx
│   │   ├── NotificationToast.stories.tsx
│   │   ├── SkeletonShad.stories.tsx
│   │   ├── SkeletonSpan.stories.tsx
│   │   ├── StepsMaker.stories.tsx
│   │   └── Table.stories.tsx
│   ├── Forms
│   │   ├── SimpleForm.stories.tsx
│   │   └── UpgradedForm.stories.tsx
│   ├── Layout
│   │   └── Layout.stories.tsx
│   ├── Navigation
│   │   ├── Footer.stories.tsx
│   │   ├── NavigationBar.stories.tsx
│   │   └── SideFilterStationary.stories.tsx
│   ├── OverlaysAndFeedback
│   │   └── LoadingOverlay.stories.tsx
│   ├── Theme
│   │   ├── BackgroundDemo.stories.tsx
│   │   └── ThemeProvider.stories.md
│   ├── UI
│   │   ├── Button.stories.tsx
│   │   ├── CheckboxGroup.stories.tsx
│   │   ├── ComboBox.stories.tsx
│   │   ├── DropdownMenu.stories.tsx
│   │   ├── Input.stories.tsx
│   │   ├── Label.stories.tsx
│   │   ├── MatrixInput.stories.tsx
│   │   ├── Search.stories.tsx
│   │   ├── Toggle.stories.tsx
│   │   └── Upload.stories.tsx
│   └── Upgraded
│       ├── CheckboxGroupForm.stories.tsx
│       ├── DropdownForm.stories.tsx
│       └── UploadForm.stories.tsx
├── styles
│   ├── components.scss
│   └── globals.css
├── test.tsx
├── types
└── values
    └── index.ts


Do a final check you can use tree command on termninal to see everything

But doublecheck that the contents of /components are all exported properly on the root main.ts file while some components who has a scss file has been properly exported in the /styles/component.scss

Then check if each of the components has a corresponding stories to demonstrate them if not kindly list them down first and show it to me