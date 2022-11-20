import React, { useEffect, useRef, useState } from 'react';
import styles from './codeEditor.module.scss';
import Image from 'next/image';
import { RiLoader3Fill } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { SlPlus } from 'react-icons/sl';
import { useOnScreen } from '../../hooks/useOnScreen';

const CodeEditor: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const blockColors = [
    'bg-[#48aca2]',
    'bg-[#5a395a]',
    'bg-[#78c078]',
    'bg-[#5e5efb]',
  ];
  const outputData = [true, true, false];
  const blockColorSize = blockColors.length;

  const codeStructure = [
    {
      columns: [
        {
          columns: 3,
          size: ['w-[100px]', 'w-[100px]', 'w-[50px]'],
          indentation: 0,
        },
        {
          columns: 4,
          size: ['w-[100px]', 'w-[20px]', 'w-[100px]', 'w-[60px]'],
          indentation: 'pl-4',
        },
        {
          columns: 4,
          size: ['w-[30px]', 'w-[20px]', 'w-[100px]', 'w-[60px]'],
          indentation: 'pl-8',
        },
        {
          columns: 4,
          size: ['w-[100px]', 'w-[80px]', 'w-[80px]', 'w-[30px]'],
          indentation: 'pl-8',
        },
        {
          columns: 2,
          size: ['w-[100px]', 'w-[20px]'],
          indentation: 'pl-4',
        },
      ],
    },
  ];
  let currTotalBlock = 0;
  const [loading, setLoading] = useState(true);
  const resetOutputs = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  if (isOnScreen) {
    resetOutputs();
  }

  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.header}>
        <div className={styles.header_buttons_container}>
          <span className={styles.header_buttons}></span>
          <span className={styles.header_buttons}></span>
          <span className={styles.header_buttons}></span>
        </div>
        <div className={styles.header_tabs_container}>
          <span className={styles.header_tabs}></span>
          <span className={styles.header_tabs}></span>
        </div>
      </div>
      <div className={styles.inner_container}>
        <div className={styles.editor}>
          {codeStructure.map((row, rowIdx) => {
            return (
              <div className={styles.code}>
                {row.columns.map((columns, colIdx) => {
                  return (
                    <div
                      className={styles.code_row + ` ${columns.indentation}`}
                    >
                      {Array(columns.columns)
                        .fill(1)
                        .map((column, index) => {
                          return (
                            <div
                              className={
                                styles.code_block +
                                `  w-${columns.size[index]}` +
                                ` ${columns.size[index]} `
                              }
                            >
                              <div
                                className={
                                  styles.code_block_inner +
                                  ` ${
                                    blockColors[
                                      Math.floor(Math.random() * blockColorSize)
                                    ]
                                  }` +
                                  ` ${
                                    isOnScreen
                                      ? styles.code_block_inner_animated
                                      : ''
                                  }`
                                }
                                style={{
                                  transitionDelay: `${
                                    currTotalBlock++ * 0.25
                                  }s`,
                                }}
                              ></div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className={styles.code_output}>
            <h1>output</h1>
            <div className={styles.code_output_container}>
              {loading ? (
                <RiLoader3Fill className={styles.code_loading} />
              ) : (
                <div className={styles.code_outputs}>
                  {outputData.map((output) => {
                    return (
                      <div className={styles.code_output_response_container}>
                        {output ? (
                          <AiOutlineCheckCircle fill="green" />
                        ) : (
                          <SlPlus
                            fill="red"
                            style={{
                              transform: 'rotate(135deg)',
                              fontSize: '28px',
                            }}
                          />
                        )}
                        <div
                          className={
                            styles.code_output_response +
                            ' ' +
                            (output && styles.code_output_accepted)
                          }
                        ></div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
