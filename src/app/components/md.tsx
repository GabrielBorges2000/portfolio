"use client"

import React from "react";

import Markdown from 'marked-react';

export function MD({ text }: {text:string}) {
    return (
        <Markdown>
            {text}
        </Markdown>
    );
}