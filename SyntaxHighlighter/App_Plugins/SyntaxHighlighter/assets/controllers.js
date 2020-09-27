angular.module("umbraco").controller("SyntaxHighlighter.Controllers.Dialogs.InsertCodeController",
    [
        "$scope", "dialogService",
        function (scope, dialogService) {
            //scope.languages = [
            //    {
            //        title: "AppleScript",
            //        value: "applescript"
            //    },
            //    {
            //        title: "ActionScript 3",
            //        value: "actionscript3"
            //    }, {
            //        title: "Bash Shell",
            //        value: "bash"
            //    }, {
            //        title: "C#",
            //        value: "c-sharp"
            //    }
            //],

            scope.snippet = "";
            scope.language = "";

            scope.close = function () {
                dialogService.closeAll()
            },

            scope.isValid = function () {
                return (scope.language.length > 0 && scope.snippet.length > 0);
            }

            scope.done = function () {
                var options = ";";
                if (scope.nogutter)
                    options = " gutter: false;";

                if (scope.collapse)
                    options = options + " collapse: true;";

                if (scope.nocontrols)
                options = options + " toolbar: false;";

                if (scope.htmlscript)
                options = options + " html-script: true;";

                var content = scope.snippet.replace(/[<]/g, '&lt;').replace(/[>]/g, '&gt;');
                /* content = content.replace(/[&]/g, '&amp;');*/

                scope.submit("<pre class='brush: " + scope.language + options + "'>" + content + "</pre>");
            }
        }
    ]
)
