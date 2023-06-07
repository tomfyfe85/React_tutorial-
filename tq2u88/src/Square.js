import React from 'react'

import { useState } from 'react';

export default function Square({ value }) {
  return (
    <button className="square">
      {value}
    </button>
  );
}

