/*
 * FleetCommand - Enterprise-grade printer monitoring and workflow accelerator.
 * Copyright (C) 2026 Pepijn Klaver
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchFleetCommand",
        title: "Search '%s' in FleetCommand",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "searchFleetCommand") {
        const text = info.selectionText.trim();
        if (text) {
            chrome.storage.local.set({ pendingSearch: text }, () => {
                if (chrome.action) {
                    chrome.action.setBadgeText({ text: "1" });
                    chrome.action.setBadgeBackgroundColor({ color: "#2563eb" });
                }
            });
        }
    }
});