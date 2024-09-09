sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name : "ui5.walkthrough",
		settings : {
			id : "walkthough"
		},
		async: true
	}).placeAt("content");

	/*
	XMLView.create({
		viewName: "ui5.walkthrough.view.App"
	}).then((oView) => oView.placeAt("content"));
	*/
});