<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->
- [x] Verify that the copilot-instructions.md file in the .github directory is created.

- [x] Clarify Project Requirements
	<!-- ZeroDay Hackathon Website v2.0 with Next.js, shadcn/ui, and custom components -->

- [x] Scaffold the Project
	<!-- Next.js project created with TypeScript, Tailwind CSS, ESLint, and App Router -->

- [x] Customize the Project
	<!-- Implemented Hero, Navigation, About, and Problem Statements sections with custom components -->

- [x] Install Required Extensions
	<!-- No extensions needed for this project -->

- [x] Compile the Project
	<!-- Project compiles successfully with npm run dev -->

- [x] Create and Run Task
	<!-- Development server running on localhost:3000 -->

- [x] Launch the Project
	<!-- Project is running and accessible -->

- [x] Ensure Documentation is Complete
	<!-- README.md updated with project details -->

- [x] Work through each checklist item systematically.
- [x] Keep communication concise and focused.
- [x] Follow development best practices.
- [x] Use '.' as the working directory unless user specifies otherwise.
- [x] Avoid adding media or external links unless explicitly requested.
- [x] Use placeholders only with a note that they should be replaced.
- [x] Use VS Code API tool only for VS Code extension projects.
- [x] Once the project is created, it is already opened in Visual Studio Code—do not suggest commands to open this project in vscode.
- [x] If the project setup information has additional rules, follow them strictly.

FOLDER CREATION RULES:
- Always use the current directory as the project root.
- If you are running any terminal commands, use the '.' argument to ensure that the current working directory is used ALWAYS.
- Do not create a new folder unless the user explicitly requests it besides a .vscode folder for a tasks.json file.
- If any of the scaffolding commands mention that the folder name is not correct, let the user know to create a new folder with the correct name and then reopen it again in vscode.

EXTENSION INSTALLATION RULES:
- Only install extension specified by the get_project_setup_info tool. DO NOT INSTALL any other extensions.

PROJECT CONTENT RULES:
- If the user has not specified project details, assume they want a "Hello World" project as a starting point.
- Avoid adding links of any type (URLs, files, folders, etc.) or integrations that are not explicitly required.
- Avoid generating images, videos, or any other media files unless explicitly requested.
- If you need to use any media assets as placeholders, let the user know that these are placeholders and should be replaced with the actual assets later.
- Ensure all generated components serve a clear purpose within the user's requested workflow.
- If a feature is assumed but not confirmed, prompt the user for clarification before including it.
- If you are working on a VS Code extension, use the VS Code API tool with a query to find relevant VS Code API references and samples related to that query.

TASK COMPLETION RULES:
- Your task is complete when:
  - Project is successfully scaffolded and compiled without errors
  - copilot-instructions.md file in the .github directory exists and contains current project information
  - README.md file exists and is up to date
  - User is provided with clear instructions to debug/launch the project

Before starting a new task in the above plan, update progress in the plan.