import prisma from "@/lib/db";
import { inngest } from "./client";
import {
  generateText,
  experimental_generateSpeech as generateSpeech,
} from "ai";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createMistral } from "@ai-sdk/mistral";
import { createHuggingFace } from "@ai-sdk/huggingface";
import { createCohere } from "@ai-sdk/cohere";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { createElevenLabs } from "@ai-sdk/elevenlabs";
import { createPerplexity } from "@ai-sdk/perplexity";
import { createAssemblyAI } from "@ai-sdk/assemblyai";

const google = createGoogleGenerativeAI();
const groq = createGroq();
const openai = createOpenAI();
const anthropic = createAnthropic();
const mistral = createMistral();
const huggingFace = createHuggingFace();
const cohere = createCohere();
const deepSeek = createDeepSeek();
const elevenLabs = createElevenLabs();
const perplexity = createPerplexity();
const assemblyAI = createAssemblyAI();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s");

    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: google("gemini-2.5-flash"),
      },
    );

    const { steps: groqSteps } = await step.ai.wrap(
      "groq-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: groq("llama-3.1-8b-instant"),
      },
    );

    const { steps: openaiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: openai("gpt-5"),
      },
    );

    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: anthropic("claude-opus-4-6"),
      },
    );

    const { steps: mistralSteps } = await step.ai.wrap(
      "mistral-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: mistral("mistral-large-latest"),
      },
    );

    const { steps: huggingfaceSteps } = await step.ai.wrap(
      "huggingface-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: huggingFace("meta-llama/Llama-3.1-405B-Instruct"),
      },
    );

    const { steps: cohereSteps } = await step.ai.wrap(
      "cohere-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: cohere("command-r-plus"),
      },
    );

    const { steps: deepseekSteps } = await step.ai.wrap(
      "deepseek-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: deepSeek("deepseek-chat"),
      },
    );

    const { steps: perplexitySteps } = await step.ai.wrap(
      "perplexity-generate-text",
      generateText,
      {
        system: "You are a helpful assistant.",
        prompt: "what is 2+2",
        model: perplexity("sonar-pro"),
      },
    );

    return {
      geminiSteps,
      groqSteps,
      openaiSteps,
      anthropicSteps,
      mistralSteps,
      huggingfaceSteps,
      cohereSteps,
      deepseekSteps,
      perplexitySteps,
    };
  },
);
