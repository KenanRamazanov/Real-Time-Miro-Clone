"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import {
    AuthLoading,
    Authenticated,
    ConvexReactClient,
  } from "convex/react";