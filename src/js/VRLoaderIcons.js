/**
  Copyright 2015 Bhautik J Joshi

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
**/

var base64 = function(mimeType, base64) {
  return 'data:' + mimeType + ';base64,' + base64;
};

VRLoaderLogos = {
 gallery : base64('image/svg+xml', 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik04LjE3NSw3LjU4MlY2LjI2M2MwLTAuMzUzLTAuMjg1LTAuNjM4LTAuNjM4LTAuNjM4SDYuMjYzYy0wLjM1MywwLTAuNjM4LDAuMjg1LTAuNjM4LDAuNjM4djEuMjc1VjcuNTI5YzAsMC4zNTcsMC4yODUsMC42NDYsMC42MzgsMC42NDZINi4yMThoMS4zMTljMC4zNTMsMCwwLjYzOC0wLjI4NSwwLjYzOC0wLjYzOCIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMy4yNzUsNy41ODJWNi4yNjNjMC0wLjM1My0wLjI4Ni0wLjYzOC0wLjYzOC0wLjYzOGgtMS4yNzVjLTAuMzUzLDAtMC42MzgsMC4yODUtMC42MzgsMC42Mzh2MS4yNzVWNy41MjljMCwwLjM1NywwLjI4NSwwLjY0NiwwLjYzOCwwLjY0NmgtMC4wNDRoMS4zMTljMC4zNTIsMCwwLjYzOC0wLjI4NSwwLjYzOC0wLjYzOCIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik04LjE3NSwxMi42ODJ2LTEuMzE5YzAtMC4zNTMtMC4yODUtMC42MzgtMC42MzgtMC42MzhINi4yNjNjLTAuMzUzLDAtMC42MzgsMC4yODUtMC42MzgsMC42Mzh2MS4yNzV2LTAuMDA5YzAsMC4zNTcsMC4yODUsMC42NDYsMC42MzgsMC42NDZINi4yMThoMS4zMTljMC4zNTMsMCwwLjYzOC0wLjI4NiwwLjYzOC0wLjYzOCIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMy4yNzUsMTIuNjgydi0xLjMxOWMwLTAuMzUzLTAuMjg2LTAuNjM4LTAuNjM4LTAuNjM4aC0xLjI3NWMtMC4zNTIsMC0wLjYzOCwwLjI4NS0wLjYzOCwwLjYzOHYxLjI3NXYtMC4wMDljMCwwLjM1NywwLjI4NiwwLjY0NiwwLjYzOCwwLjY0NmgtMC4wNDVoMS4zMmMwLjM1MiwwLDAuNjM4LTAuMjg2LDAuNjM4LTAuNjM4Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE4LjM3NSwxMi42ODN2LTEuMzJjMC0wLjM1Mi0wLjI4NS0wLjYzOC0wLjYzNy0wLjYzOGgtMS4yNzVjLTAuMzUyLDAtMC42MzgsMC4yODYtMC42MzgsMC42Mzh2MS4yNzV2LTAuMDA4YzAsMC4zNTcsMC4yODYsMC42NDYsMC42MzgsMC42NDZoLTAuMDQ1aDEuMzJjMC4zNTIsMCwwLjYzNy0wLjI4NiwwLjYzNy0wLjYzOCIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xOC4zNzUsNy41ODJWNi4yNjNjMC0wLjM1My0wLjI4NS0wLjYzOC0wLjYzNy0wLjYzOGgtMS4yNzVjLTAuMzUyLDAtMC42MzgsMC4yODUtMC42MzgsMC42Mzh2MS4yNzVWNy41MjljMCwwLjM1NywwLjI4NiwwLjY0NiwwLjYzOCwwLjY0NmgtMC4wNDVoMS4zMmMwLjM1MiwwLDAuNjM3LTAuMjg1LDAuNjM3LTAuNjM4Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTguMTc1LDE3Ljc4MnYtMS4zMTljMC0wLjM1Mi0wLjI4NS0wLjYzOC0wLjYzOC0wLjYzOEg2LjI2M2MtMC4zNTMsMC0wLjYzOCwwLjI4Ni0wLjYzOCwwLjYzOHYxLjI3NXYtMC4wMDljMCwwLjM1NiwwLjI4NSwwLjY0NiwwLjYzOCwwLjY0Nkg2LjIxOGgxLjMxOWMwLjM1MywwLDAuNjM4LTAuMjg1LDAuNjM4LTAuNjM3Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEzLjI3NSwxNy43ODJ2LTEuMzE5YzAtMC4zNTItMC4yODYtMC42MzgtMC42MzgtMC42MzhoLTEuMjc1Yy0wLjM1MiwwLTAuNjM4LDAuMjg2LTAuNjM4LDAuNjM4djEuMjc1di0wLjAwOWMwLDAuMzU2LDAuMjg2LDAuNjQ2LDAuNjM4LDAuNjQ2aC0wLjA0NWgxLjMyYzAuMzUyLDAsMC42MzgtMC4yODUsMC42MzgtMC42MzciLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTguMzc1LDE3Ljc4MnYtMS4zMTljMC0wLjM1Mi0wLjI4NS0wLjYzOC0wLjYzNy0wLjYzOGgtMS4yNzVjLTAuMzUyLDAtMC42MzgsMC4yODYtMC42MzgsMC42Mzh2MS4yNzV2LTAuMDA5YzAsMC4zNTYsMC4yODYsMC42NDYsMC42MzgsMC42NDZoLTAuMDQ1aDEuMzJjMC4zNTIsMCwwLjYzNy0wLjI4NSwwLjYzNy0wLjYzNyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yMi4yLDE3LjQ1NVY2LjljMC0yLjgxOS0yLjI4MS01LjEtNS4xMDEtNS4xSDYuOWMtMi44MTksMC01LjEsMi4yODEtNS4xLDUuMXYxMC4ydi0wLjA3YzAsMi44NTgsMi4yODEsNS4xNzEsNS4xLDUuMTcxSDYuNTQ2SDE3LjFjMi44MTksMCw1LjEwMS0yLjI4MSw1LjEwMS01LjEwMSIvPjwvc3ZnPg=='),
 nextArrow : base64('image/svg+xml', 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzFEMUQxQiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjAsNS45NjkgMTIsNiAxMiwwIDI0LDEyIDEyLjAzMSwyNCAxMiwxOCAwLDE4ICIvPjwvc3ZnPg=='),
 prevArrow : base64('image/svg+xml', 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzFEMUQxQiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjI0LDE4LjAzMSAxMiwxOCAxMiwyNCAwLDEyIDExLjk2OSwwIDEyLDYgMjQsNiAiLz48L3N2Zz4='),
};

module.exports = VRLoaderLogos;