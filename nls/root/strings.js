/*jshint maxlen:false */

define({
    ADVANCED_FEATURES_WARNING:          "This features are not recommended for basic Git users as they may cause you to lose code that has been already commited if used inproperly. Use with caution.",
    ADD_ENDLINE_TO_THE_END_OF_FILE:     "Add endline at the end of file",
    ADD_TO_GITIGNORE:                   "Add to .gitignore",
    AGREE_TO_STORE_PASSWORDS:           "I agree that password are stored in plain text on my computer",
    AMEND_COMMIT:                       "Amend last commit",
    AMEND_COMMIT_FORBIDDEN:             "Cannot amend commit when there are no unpushed commits",
    AUTHOR:                             "Author",
    AUTHORS_OF:                         "Authors of",
    BASH_NOT_AVAILABLE:                 "Bash is not available or properly configured",
    BASIC_CONFIGURATION:                "Basic configuration",
    BRACKETS_GIT_ERROR:                 "Brackets Git encountered an error\u2026",
    BRANCH_NAME:                        "Branch name",
    BUTTON_CANCEL:                      "Cancel",
    BUTTON_CHANGELOG:                   "Show changelog",
    BUTTON_CLOSE:                       "Close",
    BUTTON_DEFAULTS:                    "Restore defaults",
    BUTTON_OK:                          "OK",
    BUTTON_REPORT:                      "Report",
    BUTTON_SAVE:                        "Save",
    BUTTON_COMMIT:                      "Commit",
    BUTTON_INIT:                        "Init",
    BUTTON_CLONE:                       "Clone",
    BUTTON_CHECKOUT_COMMIT:             "Checkout",
    BUTTON_REBASE_CONTINUE:             "Continue rebase",
    BUTTON_REBASE_SKIP:                 "Skip",
    BUTTON_REBASE_ABORT:                "Abort",
    BUTTON_RESET:                       "Reset index",
    BUTTON_RESET_HARD:                  "Reset to this commit and discard the changes that came after it. (reset --hard)",
    BUTTON_RESET_SOFT:                  "Reset to this commit and retain changes that came after it staged for a new commit. (reset --soft)",
    BUTTON_RESET_MIXED:                 "Reset to this commit and retain changes that came after it unstaged. (reset --mixed)",
    CHANGELOG:                          "Changelog",
    CHANGE_USER_NAME:                   "Change git username",
    CHANGE_USER_EMAIL:                  "Change git email",
    CHECK_GIT_SETTINGS:                 "Check Git settings",
    CODE_INSPECTION_PROBLEMS:           "Code inspection problems:",
    COMMAND_ARGUMENTS:                  "Command arguments",
    COMMIT:                             "Commit",
    COMMIT_ALL_SHORTCUT:                "Commit all files",
    COMMIT_CURRENT_SHORTCUT:            "Commit current file",
    COMMIT_MESSAGE_PLACEHOLDER:         "Enter commit message here\u2026",
    CLONE_REPOSITORY:                   "Clone repository",
    CREATE_NEW_BRANCH:                  "Create new branch\u2026",
    CREATE_NEW_REMOTE:                  "Create new remote\u2026",
    CREATE_NEW_GITFTP_SCOPE:            "Create new Git-FTP remote\u2026",
    CUSTOM_TERMINAL_COMMAND:            "Custom terminal command (sample: gnome-terminal or complete path to executable)",
    CUSTOM_TERMINAL_COMMAND_HINT:       "Sample arguments: --window --working-directory=$1<br>$1 in arguments will be replaced by current project directory.",
    DATE_FORMAT:                        "YYYY-MM-DD HH:mm:ss",
    DATE_MODE_0:                        "Formatted using local date format",
    DATE_MODE_1:                        "Relative time",
    DATE_MODE_2:                        "Intelligent mode (relative/formatted)",
    DATE_MODE_3:                        "Formatted using your own format",
    DATE_MODE_4:                        "Original Git date",
    DEBUG:                              "Debug",
    DEBUG_MODE_SETTING:                 "DEBUG mode &mdash; Leave this OFF unless you need to find a problem with the extension. All Git communication will be forwarded to Brackets console!",
    DELETE_FILE:                        "Delete file",
    DELETE_REMOTE:                      "Delete remote",
    DELETE_REMOTE_NAME:                 "Do you really wish to delete remote \"{0}\"?",
    DELETE_LOCAL_BRANCH:                "Delete local branch",
    DELETE_LOCAL_BRANCH_NAME:           "Do you really wish to delete local branch \"{0}\"?",
    TITLE_CHECKOUT:                     "Do you really wish to checkout this commmit?",
    DIALOG_CHECKOUT:                    "When checking out a commit, the repo will go into a DETACHED HEAD state. You can't make any commits unless you create a branch based on this.",
    TITLE_RESET:                        "Do you really wish to reset?",
    DIALOG_RESET_HARD:                  "You will lose all changes after this commit!",
    DIALOG_RESET_MIXED:                 "Changes after this commit will be unstaged.",
    DIALOG_RESET_SOFT:                  "Changes after this commit will be staged for a new commmit.",
    DIFF:                               "Diff",
    DIFF_FAILED_SEE_FILES:              "Git diff failed to provide diff results. This is the list of staged files to be commited:",
    ENTER_PASSWORD:                     "Enter password:",
    ENTER_USERNAME:                     "Enter username:",
    ENTER_REMOTE_GIT_URL:               "Enter Git URL of the repository you want to clone:",
    ENTER_REMOTE_NAME:                  "Enter name of the new remote:",
    ENTER_GITFTP_SCOPE_NAME:            "Enter name of the new Git-FTP remote:",
    ENTER_REMOTE_URL:                   "Enter URL of the new remote:",
    ENTER_GITFTP_SCOPE_URL:             "Enter FTP URL of the new Git-FTP remote specifing username and password:",
    ERROR_TERMINAL_NOT_FOUND:           "Terminal was not found for your OS, you can define a custom Terminal command in the settings",
    ERROR_CONNECT_NODEJS:               "Failed to connect to NodeJS. If you just updated the extension close all instances of Brackets and try starting again.",
    EXTENDED_COMMIT_MESSAGE:            "EXTENDED",
    EXTENSION_WAS_UPDATED_TITLE:        "The extension was updated to {0}",
    ENTER_NEW_USER_NAME:                "Enter username",
    ENTER_NEW_USER_EMAIL:               "Enter email",
    ENABLE_ADVANCED_FEATURES:           "Enable advanced features",
    FEATURES:                           "Features",
    FILE_STAGED:                        "Staged",
    FILE_UNMODIFIED:                    "Unmodified",
    FILE_IGNORED:                       "Ignored",
    FILE_UNTRACKED:                     "Untracked",
    FILE_MODIFIED:                      "Modified",
    FILE_ADDED:                         "New file",
    FILE_DELETED:                       "Deleted",
    FILE_RENAMED:                       "Renamed",
    FILE_COPIED:                        "Copied",
    FILE_UNMERGED:                      "Unmerged",
    FOR_MAC_LINUX_USERS:                "For Mac/Linux users",
    FOR_WINDOWS_USERS:                  "For Windows users",
    GIT_COMMIT:                         "Git commit\u2026",
    GIT_CONFIGURATION:                  "Git configuration",
    GIT_DIFF:                           "Git diff &mdash;",
    GIT_IS_IN_PATH:                     "Git can be called from anywhere (is in system path, might not work on Mac)",
    GIT_PULL_RESPONSE:                  "Git Pull response",
    GIT_PUSH_RESPONSE:                  "Git Push response",
    GITFTP_PUSH_RESPONSE:               "Git-FTP Push response",
    GIT_SETTINGS:                       "Git Settings\u2026",
    GIT_REMOTES:                        "Git remotes",
    GITFTP_SCOPES:                      "Git-FTP remotes",
    GOTO_PREVIOUS_GIT_CHANGE:           "Go to previous Git change",
    GOTO_NEXT_GIT_CHANGE:               "Go to next Git change",
    HIDE_UNTRACKED:                     "Hide untracked",
    HISTORY:                            "History",
    INIT_GITFTP_SCOPE:                  "Initialize Git-FTP remote",
    INIT_GITFTP_SCOPE_NAME:             "Initialize Git-FTP remote \"{0}\"?",
    LAUNCH_BASH_SHORTCUT:               "Bash/Terminal shortcut",
    LOADING:                            "Loading\u2026",
    LINES:                              "Lines",
    _LINES:                             "lines",
    LIST_MODIFIED_FILES:                "Modified files",
    MARK_MODIFIED_FILES_IN_TREE:        "Mark modified files in file tree",
    MERGE_BRANCH:                       "Merge branch",
    MERGE_RESULT:                       "Merge result",
    MERGE_MESSAGE:                      "Merge message",
    NORMALIZE_LINE_ENDINGS:             "Normalize line endings (to \\n)",
    NOTHING_TO_COMMIT:                  "Nothing to commit, working directory clean.",
    ORIGIN_BRANCH:                      "Origin branch",
    PANEL_COMMAND:                      "Show Git panel",
    PANEL_SHORTCUT:                     "Toggle panel",
    PASSWORDS:                          "Passwords",
    PATH_TO_GIT_EXECUTABLE:             "Path to Git executable",
    PATH_TO_GIT_MSYSGIT:                "Path to msysgit folder",
    PULL_SHORTCUT:                      "Pull from remote repository",
    PUSH_SHORTCUT:                      "Push to remote repository",
    Q_DELETE_FILE:                      "Are you sure you wish to delete the file <span class='dialog-filename'>{0}</span>?",
    Q_RESTART_BRACKETS:                 "Do you wish to restart Brackets to apply new settings?",
    Q_UNDO_CHANGES:                     "Reset changes to file <span class='dialog-filename'>{0}</span>?",
    REBASE_RESULT:                      "Rebase result",
    REMOVE_BOM:                         "Remove BOM from files",
    REMOVE_FROM_GITIGNORE:              "Remove from .gitignore",
    RESTART:                            "Restart",
    RESET_LOCAL_REPO:                   "Discard all changes since last commit",
    RESET_LOCAL_REPO_CONFIRM:           "Do you wish to discard all changes done since last commit? This action can't be reverted.",
    SAVE_PASSWORD_QUESTION:             "Save username/password?",
    SET_ORIGIN_URL:                     "Set origin URL",
    SHORTCUTS:                          "Shortcuts",
    SHORTCUTS_HINT:                     "Separate keys with dash, like this: Ctrl-Alt-G<br>You can use the english key identifiers Ctrl, Cmd (Mac), Alt and Shift.",
    SHOW_BASH_TERMINAL_BUTTON:          "Show Bash/Terminal button in the panel",
    SHOWN_DATE_FORMAT:                  "Format of commit dates in history",
    SHOW_REPORT_BUG_BUTTON:             "Show Report Bug button in the panel",
    SHOW_UNTRACKED:                     "Show untracked",
    STRIP_WHITESPACE_FROM_COMMITS:      "Strip trailing whitespace from commits",
    TARGET_BRANCH:                      "Target branch",
    TOOLTIP_BUG:                        "Report bug",
    TOOLTIP_OPEN_BASH:                  "Open Bash/Terminal console",
    TOOLTIP_PULL:                       "Git Pull",
    TOOLTIP_PUSH:                       "Git Push",
    TOOLTIP_GITPUSH:                    "Git-FTP Push",
    TOOLTIP_CLOSE_NOT_MODIFIED:         "Close files not modified in Git",
    TOOLTIP_INIT:                       "Initialize repository",
    TOOLTIP_CHECKOUT_COMMIT:            "Checkout a specific commit",
    TOOLTIP_CLONE:                      "Clone existing repository",
    TOOLTIP_COMMIT:                     "Commit the selected files",
    TOOLTIP_REFRESH_PANEL:              "Refresh panel",
    TOOLTIP_HIDE_HISTORY:               "Hide history",
    TOOLTIP_SHOW_HISTORY:               "Show history",
    TOOLTIP_HIDE_FILE_HISTORY:          "Hide file history",
    TOOLTIP_SHOW_FILE_HISTORY:          "Show file history",
    TOOLTIP_PICK_REMOTE:                "Pick preferred remote",
    TOOLTIP_MORE:                       "More actions\u2026",
    TOOLTIP_REBASE_CONTINUE:            "Restart the rebasing process after having resolved a merge conflict",
    TOOLTIP_REBASE_SKIP:                "Restart the rebasing process by skipping the current patch",
    TOOLTIP_REBASE_ABORT:               "Abort the rebase operation and reset HEAD to the original branch",
    USER_ABORTED:                       "User aborted!",
    UNDO_CHANGES:                       "Discard changes",
    UNDO_LAST_LOCAL_COMMIT:             "Undo last local (not pushed) commit",
    URL:                                "URL",
    USE_CODE_INSPECTION:                "Use Code inspection",
    USE_GIT_GUTTER:                     "Use Git gutter marks",
    USE_REBASE:                         "Use REBASE",
    USER_DATE_FORMAT:                   "Own date format (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntax</a>)",
    USE_GITFTP:                         "Use Git-FTP",
    USE_GRAVATAR:                       "Use Gravatars (requires internet)",
    USING_GIT_VERSION:                  "Git version",
    VIEW_AUTHORS_SELECTION:             "View authors of selection",
    VIEW_AUTHORS_FILE:                  "View authors of file"
});
